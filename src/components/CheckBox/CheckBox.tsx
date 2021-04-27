import {forwardRef, HTMLAttributes} from 'react';

import {useMergedRef} from 'utils/hooks';

import Styled from './CheckBox.styles';

export type CheckBoxProps = {
	className?: string;
	checked: boolean;
	onChange: () => void;
	labelledBy: string;
	readOnly?: boolean;
	name?: string;
	value?: number | string;
} & HTMLAttributes<HTMLInputElement>;

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(({
	className,
	checked,
	onChange,
	labelledBy,
	readOnly,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLInputElement>(forwardedRef);

	return <Styled.CheckBox
		className={className}
		ref={componentRef}
		onChange={onChange}
		type='checkbox'
		aria-labelledby={labelledBy}
		aria-readonly={readOnly}
		{...props}
	/>;
});

export default CheckBox;