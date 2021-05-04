import {forwardRef, useRef, HTMLAttributes} from 'react';

import {limitInRange} from 'utils/functions';
import {useMergedRef, useEvent} from 'utils/hooks';

import Styled from './Slider.styles';

export type SliderProps = {
	value: number | [number, number];
	range: [number, number];
	onChange: (v: number | [number, number]) => void;
	step?: number;
	bigStep?: number;
	minSpan?: number;
	disabled?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

type DragType = 'left' | 'right' | 'handle';

const Slider = forwardRef<HTMLDivElement, SliderProps>(({
	value,
	range,
	onChange,
	disabled,
	step,
	bigStep,
	minSpan,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLDivElement>(forwardedRef);

	const isArray = Array.isArray(value);
	const rangeSpan = range[1] - range[0];

	const dragInfoRef = useRef<{
		type: DragType;
		valueStart: typeof value;
		xStart: number;
		width: number;
	}>();

	const getValue = (
		type: DragType,
		valueCurr: typeof value,
		valueDiff: number
	): typeof value => {
		if (isArray){
			switch (type){
			case 'left':
				return [
					limitInRange(valueCurr[0] + valueDiff, [range[0], valueCurr[1] - (minSpan || rangeSpan*0.1)]),
					valueCurr[1]
				];
			case 'right':
				return [
					valueCurr[0],
					limitInRange(valueCurr[1] + valueDiff, [valueCurr[0] + (minSpan || rangeSpan*0.1), range[1]])
				];
			case 'handle':
				const valueSpan = valueCurr[1] - valueCurr[0];
				const leftPos = limitInRange(valueCurr[0] + valueDiff, [range[0], range[1] - valueSpan]);

				return [
					leftPos,
					limitInRange(leftPos + valueSpan, [range[0], range[1]])
				];
			}
		}
		return limitInRange(valueCurr as number + valueDiff, range);
	};

	const onDragStart = (e, type: DragType) => {
		dragInfoRef.current = {
			type,
			width: componentRef.current.getBoundingClientRect().width,
			valueStart: isArray ? [...value as [number, number]] : value,
			xStart: e.clientX
		};
	};

	const onKeyDown = (e, type: DragType) => {
		let valueDiff;
		switch(e.code){
		case 'ArrowLeft':
		case 'ArrowDown':
			valueDiff = -(step || rangeSpan/100);
			break;
		case 'ArrowRight':
		case 'ArrowUp':
			valueDiff = (step || rangeSpan/100);
			break;
		case 'PageDown':
			valueDiff = -(bigStep || rangeSpan/10);
			break;
		case 'PageUp':
			valueDiff = (bigStep || rangeSpan/10);
			break;
		case 'Home':
			valueDiff = -rangeSpan;
			break;
		case 'End':
			valueDiff = rangeSpan;
		}

		valueDiff && onChange(getValue(type, value, valueDiff));
	};


	useEvent('pointermove', ({clientX}: PointerEvent) => {
		if (dragInfoRef.current){
			const {type, valueStart, xStart, width} = dragInfoRef.current;
			const valueDiff = (clientX - xStart)/width*(range[1]-range[0]);

			onChange(getValue(type, valueStart, valueDiff));
		}
	});

	useEvent('pointerup', () => {
		dragInfoRef.current = null;
	});

	const leftThumbPos = ((isArray ? value[0] : value) - range[0])/rangeSpan;
	const rightThumbPos = (value[1] - range[0])/rangeSpan;

	const commonProps = {
		tabIndex: disabled ? undefined : 0,
		role: 'slider',
		'aria-valuemin': range[0],
		'aria-valuemax': range[1],
		'aria-labelledby': props['aria-labelledby']
	};

	return <Styled.Slider
		{...props}
		ref={componentRef}
		aria-disabled={disabled}
	>
		<Styled.Thumb
			{...commonProps}
			left={leftThumbPos}
			onPointerDown={e => onDragStart(e, 'left')}
			onKeyUp={e => onKeyDown(e, 'left')}
			multi={isArray}
			aria-valuenow={isArray ? value[0] : value}
		/>
		{isArray && <>
			<Styled.Thumb
				{...commonProps}
				left={(value[1] - range[0])/rangeSpan}
				onPointerDown={e => onDragStart(e, 'right')}
				onKeyUp={e => onKeyDown(e, 'right')}
				multi={isArray}
				aria-valuenow={value[0]}
			/>
			<Styled.Handle
				{...commonProps}
				left={leftThumbPos}
				width={rightThumbPos - leftThumbPos}
				onPointerDown={e => onDragStart(e, 'handle')}
				onKeyUp={e => onKeyDown(e, 'handle')}
				aria-valuenow={value[1]}
			/>
		</>}
	</Styled.Slider>;
});

export default Slider;