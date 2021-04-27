import {forwardRef, HTMLAttributes} from 'react';

import {useMergedRef} from 'utils/hooks';

import Styled from './TextInput.styles';

export type TextInputProps = {
	className?: string;
	value: string;
	onChange: (v: string) => void;
	multiline?: boolean;
	labelledBy: string;
	disabled?: boolean;
	readOnly?: boolean;
	name?: string;
	required?: boolean;
} & Omit<HTMLAttributes<HTMLInputElement & HTMLTextAreaElement>, 'onChange'>;

const TextInput = forwardRef<HTMLInputElement & HTMLTextAreaElement, TextInputProps>(({
	className,
	value,
	onChange,
	multiline,
	labelledBy,
	disabled,
	readOnly,
	required,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLInputElement & HTMLTextAreaElement>(forwardedRef);

	return <Styled.TextInput
		className={className}
		ref={componentRef}
		value={value}
		onChange={e => onChange(e.target.value)}
		as={multiline ? 'textarea' : undefined}
		required={required}
		disabled={disabled}
		role='textbox'
		aria-multiline={multiline ? true : undefined}
		aria-labelledby={labelledBy}
		aria-disabled={disabled}
		aria-readonly={readOnly}
		aria-required={required}
		{...props}
	/>;
});

export default TextInput;