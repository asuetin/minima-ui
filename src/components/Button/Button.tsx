import {forwardRef, HTMLAttributes} from 'react';

import {useMergedRef} from 'utils/hooks';

import Styled from './Button.styles';

export type ButtonProps = ({
	onClick: () => void;
	href?: string;
} | {
	onClick?: () => void;
	href: string;
}) & ({
	label: string;
	icon?: JSX.Element;
} | {
	label?: string;
	icon: JSX.Element;
}) & HTMLAttributes<HTMLButtonElement & HTMLAnchorElement>;

const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(({
	label,
	icon,
	onClick,
	href,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLButtonElement & HTMLAnchorElement>(forwardedRef);

	return <Styled.Button
		{...props}
		ref={componentRef}
		aria-label={label}
		href={href}
		as={href ? 'a' : undefined}
		onClick={href ? undefined : onClick}
	>
		{icon}
		{label && <span>{label}</span>}
	</Styled.Button>;
});

Button.displayName = 'Button';

export default Button;