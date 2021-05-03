import {forwardRef, useRef, HTMLAttributes} from 'react';

import {limitInRange} from 'utils/functions';
import {useMergedRef, useEvent} from 'utils/hooks';

import Styled from './Slider.styles';

export type SliderProps = {
	value: number | [number, number];
	range: [number, number];
	onChange: (v: number | [number, number]) => void;
	disabled?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

const Slider = forwardRef<HTMLDivElement, SliderProps>(({
	value,
	range,
	onChange,
	disabled,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLDivElement>(forwardedRef);

	const isArray = Array.isArray(value);

	const dragInfoRef = useRef<{
		type: 'left' | 'right' | 'both';
		valueStart: typeof value;
		xStart: number;
		width: number;
	}>();

	useEvent('pointermove', ({clientX}: PointerEvent) => {
		if (dragInfoRef.current){
			const {type, valueStart, xStart, width} = dragInfoRef.current;

			const valueDiff = (clientX - xStart)/width*(range[1]-range[0]);

			if (isArray){
				switch (type){
				case 'left':
					onChange([
						limitInRange(valueStart[0] + valueDiff, [range[0], valueStart[1]]),
						valueStart[1]
					]);
					break;
				case 'right':
					onChange([
						valueStart[0],
						limitInRange(valueStart[1] + valueDiff, [valueStart[0], range[1]])
					]);
					break;
				case 'both':
					const valueSpan = valueStart[1] - valueStart[0];
					const leftPos = limitInRange(valueStart[0] + valueDiff, [range[0], range[1] - valueSpan]);

					onChange([
						leftPos,
						limitInRange(leftPos + valueSpan, [range[0], range[1]])
					]);
				}
			}
			else {
				onChange(limitInRange(valueStart as number + valueDiff, range));
			}
		}
	});

	useEvent('pointerup', () => {
		dragInfoRef.current = null;
	});

	const onDragStart = (e, type) => {
		dragInfoRef.current = {
			type,
			width: componentRef.current.getBoundingClientRect().width,
			valueStart: isArray ? [...value as [number, number]] : value,
			xStart: e.clientX
		};
	};

	const leftThumbPos = ((isArray ? value[0] : value) - range[0])/(range[1] - range[0]);
	const rightThumbPos = (value[1] - range[0])/(range[1] - range[0]);

	return <Styled.Slider
		{...props}
		ref={componentRef}
		aria-disabled={disabled}
	>
		<Styled.Thumb
			left={leftThumbPos}
			onPointerDown={e => onDragStart(e, 'left')}
			multi={isArray}
			tabIndex={0}
		/>
		{isArray && <>
			<Styled.Thumb
				left={(value[1] - range[0])/(range[1] - range[0])}
				onPointerDown={e => onDragStart(e, 'right')}
				multi={isArray}
				tabIndex={0}
			/>
			<Styled.Handle
				left={leftThumbPos}
				width={rightThumbPos - leftThumbPos}
				onPointerDown={e => onDragStart(e, 'both')}
				tabIndex={0}
			/>
		</>}
	</Styled.Slider>;
});

export default Slider;