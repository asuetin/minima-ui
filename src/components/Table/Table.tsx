import {forwardRef, memo, useRef, useState, useEffect, useMemo, useCallback, HTMLAttributes} from 'react';

import {remToPx, pxToRem, uniqueId, limitInRange, throttle} from 'utils/functions';
import {useMergedRef, useEvent} from 'utils/hooks';

import themeDefault from 'utils/theme';

import Styled from './Table.styles';

import Icon from 'components/Icon';

export type DataType = {[key: string]: unknown} | string | number | boolean;

export type ColumnType = {
	dataKey: string | number;
	header: string;
	renderer?: (v: {
		__rowIndex: number;
		__dataKey: string | number;
		__getter?: (v: DataType) => string | number | boolean;
		[key: string]: unknown;
	}) => JSX.Element;
	getter?: (v: DataType) => string | number | boolean;
	width?: string | number;
	minWidth?: number;
	sortable?: boolean;
};

export type SortStateType = {
	dataKey: string | number;
	value: 'asc' | 'desc';
};

export type CellType = {
	rowIndex: number;
	dataKey: string | number;
};

export type TableProps = {
	refreshTrigger?: string | number | boolean;
	columns: ColumnType[];
	data: {[key: string]: DataType}[];
	defaultSortState?: SortStateType[];
	rowHeight?: number;
	visibleRowCount?: number;
	onColumnResize?: (v: number[]) => void;
	onSort?: (v: SortStateType[]) => void;
	onCellFocus?: (v: CellType | null) => void;
	onCellHover?: (v: CellType | null) => void;
	role?: 'table' | 'grid';
} & HTMLAttributes<HTMLTableElement>;

const Table = forwardRef<HTMLTableElement, TableProps>(({
	refreshTrigger,
	columns,
	data,
	defaultSortState = [],
	rowHeight = remToPx(themeDefault.size[3]),
	visibleRowCount = 10,
	onColumnResize,
	onSort,
	onCellFocus,
	onCellHover,
	role,
	...props
}, forwardedRef) => {
	const idRef = useRef(uniqueId('table-'));
	const isGrid = role == 'grid';

	const componentRef = useMergedRef<HTMLTableElement>(forwardedRef);
	const contentRef = useRef<HTMLTableSectionElement>();

	const dragInfoRef = useRef<{
		index: number;
		columnWidthStart: number;
		columnWidthNextStart: number;
		xStart: number;
	}>();

	const [sortState, setSortState] = useState(defaultSortState);
	const [sortIndexes, setSortIndexes] = useState<number[]>([]);

	const [columnWidths, setColumnWidths] = useState<(number | null)[]>([]);

	//utility functions
	const sort = (shiftKey: boolean, dataKey: string | number) => {
		const sortIndex = sortState.findIndex(el => el.dataKey == dataKey);

		setSortState(sortStatePrev => {
			let sortStateNew = [];

			if (shiftKey){
				sortStateNew = [...sortStatePrev];
				if (sortIndex != -1){
					sortStateNew.splice(sortIndex, 1);
				}
			}

			sortStateNew.push({
				dataKey,
				value: sortState[sortIndex]?.value == 'desc' ? 'asc' : 'desc'
			});

			onSort && onSort(sortStateNew);

			return sortStateNew;
		});
	};

	const onDragStart = (e, index) =>
		dragInfoRef.current = {
			index,
			columnWidthStart: document.getElementById(`${idRef.current}-header-0-cell-${index}`).offsetWidth,
			columnWidthNextStart: document.getElementById(`${idRef.current}-header-0-cell-${index+1}`).offsetWidth,
			xStart: e.clientX
		};

	const resizeColumn = useCallback((index: number, value: number, overrideWidths?: [number, number]) => {
		const columnWidthStart = overrideWidths?.[0] ?? document.getElementById(`${idRef.current}-header-0-cell-${index}`).offsetWidth;
		const columnWidthNextStart = overrideWidths?.[1] ?? document.getElementById(`${idRef.current}-header-0-cell-${index+1}`).offsetWidth;

		const widthDiff = limitInRange(value, [
			-(columnWidthStart - (columns[index].minWidth ?? 100)),
			(columnWidthNextStart - (columns[index+1].minWidth ?? 100))
		]);

		setColumnWidths(columnWidthsPrev => {
			const columnWidthsNew = [...columnWidthsPrev];
			columnWidthsNew.splice(index, 1, columnWidthStart + widthDiff);
			columnWidthsNew.splice(index+1, 1, columnWidthNextStart - widthDiff);

			onColumnResize && onColumnResize(columnWidthsNew);
			return columnWidthsNew;
		});
	}, [columns, onColumnResize]);

	//pointer-specific controls
	useEvent('pointermove', useMemo(() => throttle(5, ({clientX}: PointerEvent) => {
		if (dragInfoRef.current){
			const {index, xStart, columnWidthStart, columnWidthNextStart} = dragInfoRef.current;
			resizeColumn(index, clientX - xStart, [columnWidthStart, columnWidthNextStart]);
		}
	}), [resizeColumn]));

	useEvent('pointerup', () => dragInfoRef.current = null);

	//keyboard-specific controls
	useEvent('keydown', (e: KeyboardEvent) => {
		if (isGrid){
			const activeElement = document.activeElement;
			if (componentRef.current.contains(activeElement)){
				if (!activeElement.id.includes(idRef.current)){
					switch (e.code){
					case 'Escape':
						//set focus back to cell
						(activeElement?.parentNode as HTMLElement)?.focus(); //set focus back to cell
					}
				}
				else {
					const elementIdSplit = activeElement.id.split('-');

					const elementType = elementIdSplit[2];
					const rowIndex = Number(elementIdSplit[3]);
					const cellIndex = Number(elementIdSplit[5]);

					//move focus between cells or resize columns if Ctrl is pressed
					if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].some(v => e.code == v)){
						e.preventDefault();
						let elementIdNext = activeElement.id;

						switch (e.code){
						case 'ArrowRight':
							if (e.ctrlKey){
								resizeColumn(cellIndex, 25);
							}
							else {
								elementIdNext = `${idRef.current}-${elementType}-${rowIndex}-cell-${cellIndex+1}`;
							}
							break;
						case 'ArrowLeft':
							if (e.ctrlKey){
								resizeColumn(cellIndex, -25);
							}
							else {
								elementIdNext = `${idRef.current}-${elementType}-${rowIndex}-cell-${cellIndex-1}`;
							}
							break;
						case 'ArrowDown':
							elementIdNext = `${idRef.current}-row-${elementType == 'header' ? 0 : rowIndex+1}-cell-${cellIndex}`;
							break;
						case 'ArrowUp':
							elementIdNext = `${idRef.current}-${rowIndex == 0 ? 'header' : 'row'}-${limitInRange(rowIndex-1, [0, null])}-cell-${cellIndex}`;
						}

						document.getElementById(elementIdNext)?.focus();
					}
					else {
						switch (e.code){
						case 'Enter':
						case 'Space':
							if (elementType == 'row'){
								//focus on component returned by custom renderer
								(document.activeElement?.firstChild as HTMLElement)?.focus();
							}
							else {
								//sort focused column
								const {sortable = true, dataKey} = columns[cellIndex];
								if (sortable){
									sort(e.shiftKey, dataKey);
								}
							}
						}
					}
				}
			}
		}
	});

	//data sorting
	useEffect(() => {
		const dataSorted = [...data.map((el, i) => ({...el, __sortIndex: i}))];

		dataSorted.sort((a, b) => {
			let sorted = 0;
			let index = 0;
			while (!sorted && index < sortState.length){
				const {dataKey, value} = sortState[index];
				const dir = value == 'asc' ? 1 : -1;
				const {getter} = columns.find(el => el.dataKey == dataKey) ?? {};

				const values = [a, b].map(
					v => getter ? getter(v[dataKey]) : v[dataKey]
				).map(
					v => typeof v == 'string' ? v.toLowerCase() : v
				);

				sorted = values[0] == values[1] ? 0 : (values[0] > values[1] ? dir : -1*dir);
				++index;
			}
			return sorted;
		});
		setSortIndexes(dataSorted.map(({__sortIndex}) => __sortIndex));
	}, [columns, data, sortState]);

	//rendering
	useEffect(() => {
		if (columnWidths.length == 0){
			setColumnWidths(columns.map(({width}) => {
				if (width){
					if (typeof width == 'string' && width.includes('fr')){
						return null;
					}
					return Number(width);
				}
				return null;
			}));
		}
	}, [columns, columnWidths]);

	const gridTemplateColumns = columnWidths.map((v, i) => {
		if (v === null){
			const min = `${pxToRem(columns[i].minWidth ?? 100)}rem`;
			const max = columns[i].width ? `${pxToRem(columns[i].width)}rem` : '1fr';
			return `minmax(${min},${max})`;
		}
		return `${pxToRem(v)}rem`;
	}).join(' ');

	return <Styled.Table
		{...props}
		ref={componentRef}
		aria-rowcount={data.length}
		role={role}
	>
		<thead>
			<Styled.HeaderRow gridTemplateColumns={gridTemplateColumns}>
				{columns.map(({dataKey, sortable = true, header}, i) => {
					const headerCellId = `${idRef.current}-header-0-cell-${i}`;
					const sortValue = sortable ? sortState[sortState.findIndex(el => el.dataKey == dataKey)]?.value : undefined;

					return <Styled.HeaderCell
						id={headerCellId}
						key={headerCellId}
						onFocus={isGrid ? () => {
							contentRef.current.scrollTop = 0;
							onCellFocus && onCellFocus(null);
						} : undefined}
						tabIndex={isGrid && i == 0 ? 0 : -1}
					>
						<Styled.Header
							sort={sortable ? sortValue : 'disabled'}
							onClick={sortable ? e => sort(e.shiftKey, dataKey) : undefined}
						>
							{header}
							{sortable && sortValue &&
								<Icon
									preset='forward'
									size={12}
								/>
							}
						</Styled.Header>
						{i != columns.length-1 &&
							<Styled.ResizeHandle onPointerDown={e => onDragStart(e, i)}/>
						}
					</Styled.HeaderCell>;
				})}
			</Styled.HeaderRow>
		</thead>
		<Styled.Content
			ref={contentRef}
			onPointerLeave={onCellHover ? () => onCellHover(null) : undefined}
			visibleRowCount={visibleRowCount}
			rowCount={data.length}
			rowHeight={rowHeight}
			rowRenderer={(index, style) => {
				const rowId = `${idRef.current}-row-${index}`;

				const rowIndex = sortIndexes[index];
				const dataObj = data[rowIndex];

				return <Styled.Row
					style={style}
					key={rowId}
					gridTemplateColumns={gridTemplateColumns}
				>
					{columns.map(({dataKey, renderer, getter}, i) => {
						const cellId = `${rowId}-cell-${i}`;

						return <Styled.Cell
							id={cellId}
							key={cellId}
							onPointerOver={onCellHover ? () => onCellHover({rowIndex, dataKey}) : undefined}
							onClick={isGrid && onCellFocus ? () => onCellFocus({rowIndex, dataKey}) : undefined}
							onFocus={isGrid && onCellFocus ? () => onCellFocus({rowIndex, dataKey}) : undefined}
						>
							{renderer ?
								renderer({
									...dataObj,
									__rowIndex: rowIndex,
									__dataKey: dataKey,
									...getter ? {__getter: getter} : {}
								}) :
								getter ? getter(dataObj[dataKey]) : dataObj[dataKey]
							}
						</Styled.Cell>;
					})}
				</Styled.Row>;
			}}
		/>
	</Styled.Table>;
});

Table.displayName = 'Table';

export default memo(Table, (propsPrev, propsNext) => {
	if (['refreshTrigger', 'visibleRowCount'].some(v => propsPrev[v] != propsNext[v])){
		return false;
	}
	return true;
});