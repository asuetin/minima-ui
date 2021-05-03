import {forwardRef, useRef, HTMLAttributes} from 'react';

import {useMergedRef, useEvent} from 'utils/hooks';

import Styled from './Slider.styles';

export type SliderProps = {
	value: number | [number, number];
	range: [number, number];
	onChange: (v: number | [number, number]) => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

const Slider = forwardRef<HTMLDivElement, SliderProps>(({
	value,
	range,
	onChange,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLDivElement>(forwardedRef);

	const isArray = Array.isArray(value);

	const dragInfoRef = useRef<{
		index: 0 | 1;
		valueStart: typeof value;
		xStart: number;
		x: number;
		width: number;
	}>();

	useEvent('pointermove', ({clientX}: PointerEvent) => {
		if (dragInfoRef.current){
			const {index, valueStart, xStart, x, width} = dragInfoRef.current;

			const valueDiff = (clientX - xStart)/width*(range[1]-range[0]);
			const valuePrev = isArray ? valueStart[index] : valueStart;
			let valueNew = valuePrev + valueDiff;

			valueNew = valueNew > range[0] ? valueNew : range[0];
			valueNew = valueNew < range[1] ? valueNew : range[1];

			if (isArray){
				const valueRangeNew = [...valueStart as [number, number]];
				valueRangeNew[index] = valueNew;
				onChange(valueRangeNew as [number, number]);
			}
			else {
				onChange(valueNew);
			}
		}
	});

	useEvent('pointerup', () => {
		dragInfoRef.current = null;
	});

	const onDragStart = (e, index) => {
		const {x, width} = componentRef.current.getBoundingClientRect();
		dragInfoRef.current = {
			index, x, width,
			valueStart: isArray ? [...value as [number, number]] : value,
			xStart: e.clientX
		};
	};

	const leftThumbPos = ((isArray ? value[0] : value) - range[0])/(range[1] - range[0]);
	const rightThumbPos = (value[1] - range[0])/(range[1] - range[0]);

	return <Styled.Slider
		{...props}
		ref={componentRef}
	>
		{isArray && <>
			<Styled.Bar
				left={leftThumbPos}
				width={rightThumbPos - leftThumbPos}
			/>
			<Styled.Thumb
				left={(value[1] - range[0])/(range[1] - range[0])}
				onPointerDown={e => onDragStart(e, 1)}
			/>
		</>}
		<Styled.Thumb
			left={leftThumbPos}
			onPointerDown={e => onDragStart(e, 0)}
		/>
	</Styled.Slider>;
});

export default Slider;