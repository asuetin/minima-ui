import {forwardRef, HTMLAttributes} from 'react';

import {useMergedRef} from 'utils/hooks';

import Styled from './ProgressBar.styles';

export type ProgressBarProps = {
	value: number;
	range: [number, number];
} & HTMLAttributes<HTMLDivElement>;

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(({
	value,
	range,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLDivElement>(forwardedRef);

	const rangeSpan = range[1] - range[0];

	const percentage = `${((value - range[0])/rangeSpan*100).toFixed(0)}%`;

	return <Styled.ProgressBar
		{...props}
		ref={componentRef}
		percentage={(value - range[0])/rangeSpan}
		role='progressbar'
		aria-valuemin={range[0]}
		aria-valuemax={range[1]}
		aria-valuenow={value}
	>
		<span>{percentage}</span>
		<span>{percentage}</span>
	</Styled.ProgressBar>;
});

export default ProgressBar;