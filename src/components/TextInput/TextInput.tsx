import {forwardRef, HTMLAttributes, MutableRefObject} from 'react';

import {useMergedRef} from 'utils/hooks';

import Styled from './TextInput.styles';

export type TextInputProps = {
	value: string;
	onChange: (v: string) => void;
	name?: string;
	required?: boolean;
	readOnly?: boolean;
} & (
	(
		{
			multiline?: false;
		} & Omit<HTMLAttributes<HTMLInputElement>, 'onChange'>
	) | (
		{
			multiline: true
		} & Omit<HTMLAttributes<HTMLTextAreaElement>, 'onChange'>
	)
);

const TextInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextInputProps>(({
	onChange,
	multiline,
	readOnly,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef(forwardedRef);

	return <Styled.TextInput
		{...props}
		as={multiline ? 'textarea' : 'input'}
		ref={
			multiline ?
			componentRef as MutableRefObject<HTMLTextAreaElement> :
			componentRef as MutableRefObject<HTMLInputElement>
		}
		onChange={e => onChange(e.target.value)}
		readOnly={readOnly}
		role='textbox'
		aria-multiline={multiline ? true : undefined}
	/>;
});

TextInput.displayName = 'TextInput';

export default TextInput;