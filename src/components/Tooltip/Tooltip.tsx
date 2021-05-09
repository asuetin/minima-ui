import {HTMLAttributes} from 'react';

import Styled from './Tooltip.styles';

export type TooltipProps = {
	children: JSX.Element;
	text: string;
	delay?: number;
} & HTMLAttributes<HTMLDivElement>;

const Tooltip = ({
	children,
	delay = 375,
	...props
}: TooltipProps): JSX.Element =>
	<Styled.Tooltip
		{...props}
		delay={delay}
		role='tooltip'
	>
		{children}
	</Styled.Tooltip>;

Tooltip.displayName = 'Tooltip';

export default Tooltip;