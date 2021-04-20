import {useState, useMemo, useEffect, forwardRef, HTMLAttributes} from 'react';
import type {ReactElement} from 'react';

import {pxToRem, debounce} from 'utils/functions';
import {useEvent, useMergedRef} from 'utils/hooks';

import Styled from './List.styles';

export type ListProps = {
	className?: string;
	rowHeight?: number;
	rowCount: number;
	rowRenderer: (index: number, style: {[key: string]: string}) => ReactElement
} & HTMLAttributes<HTMLUListElement>;

const List = forwardRef<HTMLUListElement, ListProps>(({
	className,
	rowHeight = 32,
	rowCount,
	rowRenderer,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLUListElement>(forwardedRef);

	const [visibleBounds, setVisibleBounds] = useState([0, 0]);

	const onScroll = useMemo(() => debounce(5, () => {
		if (componentRef.current){
			const {scrollTop, offsetHeight} = componentRef.current;

			const lowerBound = Math.floor((scrollTop - offsetHeight)/rowHeight);
			const upperBound = Math.ceil((scrollTop + 2*offsetHeight)/rowHeight);

			setVisibleBounds([
				lowerBound > 0 ? lowerBound : 0,
				upperBound > rowCount ? rowCount : upperBound
			]);
		}
	}), [rowHeight, rowCount, componentRef]);

	useEvent('scroll', onScroll, componentRef.current);
	useEvent('animationend', onScroll, componentRef.current);

	useEffect(() => {
		onScroll();
	}, [onScroll]);

	return <Styled.List
		className={className}
		ref={componentRef}
		role='listbox'
		{...props}
	>
		{Array.from({length: visibleBounds[1] - visibleBounds[0]}, (v, i) => rowRenderer(visibleBounds[0] + i, {
			height: `${pxToRem(rowHeight)}rem`,
			marginTop: i == 0 ? `${pxToRem(rowHeight*visibleBounds[0])}rem` : undefined,
			marginBottom: i == visibleBounds[1] - visibleBounds[0] - 1 ? `${pxToRem(rowHeight*(rowCount-visibleBounds[1]))}rem` : undefined
		}))}
	</Styled.List>;
});

export default List;
