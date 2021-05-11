import {forwardRef, memo, useRef, useState, useEffect, useMemo, HTMLAttributes} from 'react';

import {remToPx, pxToRem, uniqueId, limitInRange, throttle} from 'utils/functions';
import {useMergedRef, useEvent} from 'utils/hooks';

import themeDefault from 'utils/theme';

import Styled from './Table.styles';

import Icon from 'components/Icon';

type SortStateType = {
	dataKey: string | number;
	value: 'asc' | 'desc';
}[];

type TableCellType = {
	rowIndex: number;
	dataKey: string | number;
} | null;

export type TableProps = {
	refreshTrigger: string | number | boolean;
	columns: {
		dataKey: string | number;
		header: string;
		renderer?: (v: {
			__rowIndex: number;
			__dataKey: string | number;
			__getter?: (v: {[key: string]: unknown} | string | number | boolean) => string | number | boolean;
			[key: string]: unknown;
		}) => JSX.Element;
		getter?: (v: {[key: string]: unknown} | string | number | boolean) => string | number | boolean;
		width?: string | number;
		minWidth?: number;
		sortable?: boolean;
	}[];
	data: {
		__rowIndex: number;
	}[];
	defaultSortState?: SortStateType;
	rowHeight?: number;
	visibleRowCount?: number;
	onColumnResize?: (v: number[]) => void;
	onSort?: (v: SortStateType) => void;
	onCellClick?: (v: TableCellType) => void;
	onCellHover?: (v: TableCellType) => void;
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
	onCellClick,
	onCellHover,
	...props
}, forwardedRef) => {
	const idRef = useRef(uniqueId('table-'));

	const componentRef = useMergedRef<HTMLTableElement>(forwardedRef);

	const [sortState, setSortState] = useState(defaultSortState);
	const [sortIndexes, setSortIndexes] = useState<number[]>([]);

	//column resize controls
	const [columnWidths, setColumnWidths] = useState<(number | null)[]>([]);

	const dragInfoRef = useRef<{
		index: number;
		columnWidthStart: number;
		columnWidthNextStart: number;
		xStart: number;
	}>();

	const onDragStart = (e, index) =>
		dragInfoRef.current = {
			index,
			columnWidthStart: document.getElementById(`${idRef.current}-header-${index}`).offsetWidth,
			columnWidthNextStart: document.getElementById(`${idRef.current}-header-${index+1}`).offsetWidth,
			xStart: e.clientX
		};

	useEvent('pointermove', useMemo(() => throttle(5, ({clientX}: PointerEvent) => {
		if (dragInfoRef.current){
			setColumnWidths(columnWidthsPrev => {
				const {index, xStart, columnWidthStart, columnWidthNextStart} = dragInfoRef.current;

				const widthDiff = limitInRange(clientX - xStart, [
					-(columnWidthStart - (columns[index].minWidth ?? 100)),
					(columnWidthNextStart - (columns[index+1].minWidth ?? 100))
				]);

				const columnWidthsNew = [...columnWidthsPrev];
				columnWidthsNew.splice(index, 1, columnWidthStart + widthDiff);
				columnWidthsNew.splice(index+1, 1, columnWidthNextStart - widthDiff);

				onColumnResize && onColumnResize(columnWidthsNew);
				return columnWidthsNew;
			});
		}
	}), [columns, onColumnResize]));

	useEvent('pointerup', () => dragInfoRef.current = null);

	useEffect(() => {
		setColumnWidths(columns.map(({width}) => {
			if (width){
				if (typeof width == 'string' && width.includes('fr')){
					return null;
				}
				return Number(width);
			}
			return null;
		}));
	}, [columns]);

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
	const gridTemplateColumns = columnWidths.map((v, i) => {
		if (v === null){
			const min = `${pxToRem(columns[i].minWidth ?? 100)}rem`;
			const max = columns[i].width ? `${pxToRem(columns[i].width)}rem` : '1fr';
			return `minmax(${min},${max})`;
		}
		return `${pxToRem(v)}rem`;
	}).join(' ');

	const rowRenderer = (index, style) => {
		const rowId = `${idRef.current}-row-${index}`;

		const {__rowIndex, ...dataObj} = data[sortIndexes[index]];

		return <Styled.Row
			style={style}
			key={rowId}
			gridTemplateColumns={gridTemplateColumns}
		>
			{columns.map(({dataKey, renderer, getter}, i) =>
				<Styled.Cell
					key={`${rowId}-cell-${i}`}
					onClick={onCellClick ? () => onCellClick({rowIndex: __rowIndex, dataKey}) : undefined}
					onPointerOver={onCellHover ? () => onCellHover({rowIndex: __rowIndex, dataKey}) : undefined}
				>
					{renderer ?
						renderer({
							...dataObj,
							__rowIndex,
							__dataKey: dataKey,
							...getter ? {__getter: getter} : {}
						}) :
						getter ? getter(dataObj[dataKey]) : dataObj[dataKey]
					}
				</Styled.Cell>
			)}
		</Styled.Row>;
	};

	return <Styled.Table
		{...props}
		ref={componentRef}
	>
		<thead>
			<Styled.HeaderRow gridTemplateColumns={gridTemplateColumns}>
				{columns.map(({dataKey, sortable = true, header}, i) => {
					const keySortIndex = sortable ? sortState.findIndex(el => el.dataKey == dataKey) : -1;
					const sortValue = sortState[keySortIndex]?.value;

					return <Styled.HeaderCell
						id={`${idRef.current}-header-${i}`}
						key={`${idRef.current}-header-${i}`}
					>
						<Styled.Header
							sort={sortable ? sortValue : 'disabled'}
							onClick={sortable ? e => {
								const isShiftKey = e.shiftKey;
								setSortState(sortStatePrev => {
									let sortStateNew = [];

									if (isShiftKey){
										sortStateNew = [...sortStatePrev];
										if (keySortIndex != -1){
											sortStateNew = [...sortStatePrev];
											sortStateNew.splice(keySortIndex, 1);
										}
									}

									sortStateNew.push({
										dataKey,
										value: sortValue == 'desc' ? 'asc' : 'desc'
									});

									onSort && onSort(sortStateNew);

									return sortStateNew;
								});
							} : undefined}
						>
							{header}
							{sortable &&
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
			rowCount={data.length}
			rowHeight={rowHeight}
			rowRenderer={rowRenderer}
			visibleRowCount={visibleRowCount}
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