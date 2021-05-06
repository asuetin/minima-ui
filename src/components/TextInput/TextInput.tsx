import {forwardRef, HTMLAttributes} from 'react';

import {useMergedRef} from 'utils/hooks';

import Styled from './TextInput.styles';

export type TextInputProps = {
	value: string;
	onChange: (v: string) => void;
	multiline?: boolean;
	name?: string;
	required?: boolean;
} & Omit<HTMLAttributes<HTMLInputElement & HTMLTextAreaElement>, 'onChange'>;

const TextInput = forwardRef<HTMLInputElement & HTMLTextAreaElement, TextInputProps>(({
	onChange,
	multiline,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLInputElement & HTMLTextAreaElement>(forwardedRef);

	return <Styled.TextInput
		{...props}
		ref={componentRef}
		onChange={e => onChange(e.target.value)}
		as={multiline ? 'textarea' : undefined}
		role='textbox'
		aria-multiline={multiline ? true : undefined}
	/>;
});

TextInput.displayName = 'TextInput';

export default TextInput;