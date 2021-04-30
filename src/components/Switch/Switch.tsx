import {forwardRef, HTMLAttributes} from 'react';

import {useMergedRef} from 'utils/hooks';

import Styled from './Switch.styles';

export type SwitchProps = {
	checked: boolean;
	onChange: () => void;
	readOnly?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(({
	checked,
	onChange,
	readOnly,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLButtonElement>(forwardedRef);

	return <Styled.Switch
		{...props}
		ref={componentRef}
		onClick={readOnly ? undefined : onChange}
		role='switch'
		aria-checked={checked}
		aria-readonly={readOnly}
	/>;
});

export default Switch;