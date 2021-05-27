import {forwardRef, HTMLAttributes, MutableRefObject} from 'react';

import {useMergedRef} from 'utils/hooks';

import Styled from './Button.styles';

export type ButtonProps = (
	{
		label: string;
		icon?: JSX.Element;
	} | {
		label?: string;
		icon: JSX.Element;
	}
) & (
	(
		{
			onClick: () => void;
			href?: string;
		} & HTMLAttributes<HTMLButtonElement>
	) | (
		{
			onClick?: () => void;
			href: string;
		} & HTMLAttributes<HTMLAnchorElement>
	)
);

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
	label,
	icon,
	onClick,
	href,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef(forwardedRef);

	return <Styled.Button
		{...props}
		as={href ? 'a' : 'button'}
		{...href ? {
			ref: componentRef as MutableRefObject<HTMLAnchorElement>,
			href
		} : {
			ref: componentRef as MutableRefObject<HTMLButtonElement>,
			onClick
		}}
		aria-label={props['aria-label'] ?? label}
	>
		{icon}
		{label && <span>{label}</span>}
	</Styled.Button>;
});

Button.displayName = 'Button';

export default Button;