import {forwardRef, HTMLAttributes} from 'react';

import {useMergedRef} from 'utils/hooks';

import Styled from './CheckBox.styles';

export type CheckBoxProps = {
	checked: boolean;
	onChange: () => void;
	readOnly?: boolean;
	name?: string;
	value?: number | string;
} & HTMLAttributes<HTMLInputElement>;

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(({
	onChange,
	readOnly,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLInputElement>(forwardedRef);

	return <Styled.CheckBox
		{...props}
		ref={componentRef}
		onChange={readOnly ? undefined : onChange}
		onKeyDown={readOnly ? undefined : e => {
			if (['Enter', 'Space'].some(v => e.code == v)){
				onChange();
			}
		}}
		aria-readonly={readOnly || undefined}
	/>;
});

CheckBox.displayName = 'CheckBox';

export default CheckBox;