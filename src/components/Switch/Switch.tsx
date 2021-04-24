import {forwardRef, HTMLAttributes} from 'react';

import {useMergedRef} from 'utils/hooks';

import Styled from './Switch.styles';

export type SwitchProps = {
	className?: string;
	value: boolean;
	onClick: () => void;
	labelledBy: string;
	disabled?: boolean;
	readOnly?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(({
	className,
	value,
	onClick,
	labelledBy,
	disabled,
	readOnly,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLButtonElement>(forwardedRef);

	return <Styled.Switch
		className={className}
		ref={componentRef}
		onClick={onClick}
		disabled={disabled}
		role='switch'
		aria-checked={value}
		aria-labelledby={labelledBy}
		aria-disabled={disabled}
		aria-readonly={readOnly}
		{...props}
	/>;
});

export default Switch;