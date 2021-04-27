import {forwardRef, HTMLAttributes} from 'react';

import {useMergedRef} from 'utils/hooks';

import Styled from './CheckBox.styles';

export type CheckBoxProps = {
	className?: string;
	checked: boolean;
	onChange: () => void;
	labelledBy: string;
	disabled?: boolean;
	readOnly?: boolean;
	name?: string;
	value?: number | string;
} & HTMLAttributes<HTMLInputElement>;

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(({
	className,
	checked,
	onChange,
	labelledBy,
	disabled,
	readOnly,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLInputElement>(forwardedRef);

	return <Styled.CheckBox
		className={className}
		ref={componentRef}
		onChange={onChange}
		disabled={disabled}
		type='checkbox'
		role='checkbox'
		checked={checked}
		aria-checked={checked}
		aria-labelledby={labelledBy}
		aria-disabled={disabled}
		aria-readonly={readOnly}
		{...props}
	/>;
});

export default CheckBox;