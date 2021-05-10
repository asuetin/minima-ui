import {forwardRef, memo, useRef, useState, useEffect, HTMLAttributes} from 'react';

import {remToPx, uniqueId} from 'utils/functions';
import {useMergedRef} from 'utils/hooks';

import themeDefault from 'utils/theme';

import Styled from './Table.styles';

import Icon from 'components/Icon';

export type TableCellType = {
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
		sortable?: boolean;
	}[];
	data: {
		__rowIndex: number;
	}[];
	defaultSortState?: {
		dataKey: string | number;
		value: 'asc' | 'desc';
	}[];
	onCellClick?: (v: TableCellType) => void;
	onCellHover?: (v: TableCellType) => void;
	rowHeight?: number;
	visibleRowCount?: number;
} & HTMLAttributes<HTMLTableElement>;

const Table = forwardRef<HTMLTableElement, TableProps>(({
	refreshTrigger,
	columns,
	data,
	defaultSortState = [],
	onCellClick,
	onCellHover,
	rowHeight = remToPx(themeDefault.size[3]),
	visibleRowCount = 10,
	...props
}, forwardedRef) => {
	const idRef = useRef(uniqueId('table-'));

	const componentRef = useMergedRef<HTMLTableElement>(forwardedRef);

	const [sortState, setSortState] = useState(defaultSortState);
	const [sortIndexes, setSortIndexes] = useState<number[]>([]);

	const gridTemplateColumns = columns.map(({width}) => width || '1fr').join(' ');

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
			<Styled.Header gridTemplateColumns={gridTemplateColumns}>
				{columns.map(({dataKey, sortable = true, header}, i) => {
					const keySortIndex = sortable ? sortState.findIndex(el => el.dataKey == dataKey) : -1;
					const sortValue = sortState[keySortIndex]?.value;

					return <Styled.HeaderElement
						key={`${idRef.current}-header-${i}`}
						sort={sortable ? sortValue : 'disabled'}
						onClick={sortable ? e => {
							const isShiftKey = e.shiftKey;
							setSortState(sortStatePrev => {
								const sortStateNew = [...sortStatePrev];

								if (keySortIndex != -1){
									sortStateNew.splice(keySortIndex, 1);
								}

								return [
									...isShiftKey ? sortStateNew : [],
									{
										dataKey,
										value: sortValue == 'desc' ? 'asc' : 'desc'
									}
								];
							});
						} : undefined}
					>
						{header}
						{sortable && <Icon
							preset='forward'
							size={12}
						/>}
					</Styled.HeaderElement>;
				})}
			</Styled.Header>
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