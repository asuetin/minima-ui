import {forwardRef, HTMLAttributes} from 'react';

import {useMergedRef} from 'utils/hooks';

import Icon from 'components/Icon';

import Styled from './Button.styles';

export type ButtonProps = {
	onClick: () => void;
} & ({
	label: string;
	icon?: typeof Icon | SVGSVGElement | HTMLImageElement;
} | {
	label?: string;
	icon: typeof Icon | SVGSVGElement | HTMLImageElement;
}) & HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
	label,
	icon,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLButtonElement>(forwardedRef);

	return <Styled.Button
		{...props}
		ref={componentRef}
		aria-label={label}
	>
		{icon}
		{label && <span>{label}</span>}
	</Styled.Button>;
});

export default Button;