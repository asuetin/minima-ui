import {forwardRef, HTMLAttributes} from 'react';

import {useMergedRef} from 'utils/hooks';

import Styled from './Switch.styles';

export type SwitchProps = {
	className?: string;
	checked: boolean;
	onChange: () => void;
	labelledBy: string;
	readOnly?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(({
	className,
	checked,
	onChange,
	labelledBy,
	readOnly,
	...props
}, forwardedRef) => {
	const componentRef = useMergedRef<HTMLButtonElement>(forwardedRef);

	return <Styled.Switch
		className={className}
		ref={componentRef}
		onClick={onChange}
		role='switch'
		aria-checked={checked}
		aria-labelledby={labelledBy}
		aria-readonly={readOnly}
		{...props}
	/>;
});

export default Switch;