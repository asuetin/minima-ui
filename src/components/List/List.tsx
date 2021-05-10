import {useState, useMemo, useEffect, forwardRef, HTMLAttributes} from 'react';

import {remToPx, pxToRem, debounce, limitInRange} from 'utils/functions';
import {useEvent, useMergedRef} from 'utils/hooks';

import themeDefault from 'utils/theme';

import Styled from './List.styles';

export type ListProps = {
	rowHeight?: number;
	rowCount: number;
	rowRenderer: (index: number, style: {[key: string]: string}) => JSX.Element
} & HTMLAttributes<HTMLUListElement>;

const List = forwardRef<HTMLUListElement, ListProps>(({
	rowHeight = remToPx(themeDefault.size[3]),
	rowCount,
	rowRenderer,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLUListElement>(forwardedRef);

	const [visibleBounds, setVisibleBounds] = useState([0, 0]);

	const onScroll = useMemo(() => debounce(5, () => {
		if (componentRef.current){
			const {scrollTop, offsetHeight} = componentRef.current;

			const lowerBound = limitInRange(Math.floor(scrollTop/rowHeight) - 1, [0, rowCount]);
			const upperBound = limitInRange(Math.ceil((scrollTop + offsetHeight)/rowHeight) + 1, [0, rowCount]);

			setVisibleBounds([lowerBound, upperBound]);
		}
	}), [rowHeight, rowCount, componentRef]);

	useEvent('scroll', onScroll, componentRef.current);
	useEvent('animationend', onScroll, componentRef.current);

	useEffect(() => {
		onScroll();
	}, [onScroll]);

	return <Styled.List
		{...props}
		ref={componentRef}
		role='listbox'
	>
		{Array.from({length: visibleBounds[1] - visibleBounds[0]}, (v, i) => rowRenderer(visibleBounds[0] + i, {
			height: `${pxToRem(rowHeight)}rem`,
			marginTop: i == 0 ? `${pxToRem(rowHeight*visibleBounds[0])}rem` : undefined,
			marginBottom: i == visibleBounds[1] - visibleBounds[0] - 1 ? `${pxToRem(rowHeight*(rowCount-visibleBounds[1]))}rem` : undefined
		}))}
	</Styled.List>;
});

List.displayName = 'List';

export default List;
