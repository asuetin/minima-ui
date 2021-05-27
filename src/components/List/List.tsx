import {useState, useMemo, useEffect, forwardRef, useCallback, MutableRefObject, HTMLAttributes} from 'react';

import {remToPx, pxToRem, debounce, limitInRange} from 'utils/functions';
import {useEvent, useMergedRef} from 'utils/hooks';

import themeDefault from 'utils/theme';

import Styled from './List.styles';

export type ListProps = {
	rowHeight?: number;
	rowCount: number;
	rowRenderer: (index: number, style: {[key: string]: string}) => JSX.Element;
} & (
	(
		{
			tagName?: 'ul'
		} & HTMLAttributes<HTMLUListElement>
	) | (
		{
			tagName: 'tbody'
		} & HTMLAttributes<HTMLTableSectionElement>
	)
);

const List = forwardRef<HTMLUListElement | HTMLTableSectionElement, ListProps>(({
	rowHeight = remToPx(themeDefault.size[3]),
	rowCount,
	rowRenderer,
	tagName,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef(forwardedRef);

	const [visibleBounds, setVisibleBounds] = useState([0, 0]);

	const handleScroll = useCallback(() => {
		if (componentRef.current){
			const {scrollTop, offsetHeight} = componentRef.current;

			const lowerBound = limitInRange(Math.floor(scrollTop/rowHeight) - 1, [0, rowCount]);
			const upperBound = limitInRange(Math.ceil((scrollTop + offsetHeight)/rowHeight) + 1, [0, rowCount]);

			setVisibleBounds([lowerBound, upperBound]);
		}
	}, [rowHeight, rowCount, componentRef]);

	const handleScrollDebounced = useMemo(() => debounce(5, handleScroll), [handleScroll]);

	useEvent('scroll', handleScrollDebounced, componentRef.current);
	useEvent('animationend', handleScroll, componentRef.current);

	useEffect(() => {
		handleScroll();
	}, [handleScroll]);

	return <Styled.List
		{...props}
		as={tagName}
		ref={
			tagName == 'tbody' ?
			componentRef as MutableRefObject<HTMLTableSectionElement> :
			componentRef as MutableRefObject<HTMLUListElement>
		}
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
