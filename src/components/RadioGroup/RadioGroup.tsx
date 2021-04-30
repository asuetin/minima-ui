import {forwardRef, useRef, HTMLAttributes} from 'react';

import {uniqueId} from 'utils/functions';
import {useMergedRef} from 'utils/hooks';

import Styled from './RadioGroup.styles';

export type RadioGroupProps = {
	options: {
		value: string | number;
		label?: string;
	}[],
	value: string | number;
	onChange: (v: string | number) => void;
	disabled?: boolean;
} & Omit<HTMLAttributes<HTMLUListElement>, 'onChange'>;

const RadioGroup = forwardRef<HTMLUListElement, RadioGroupProps>(({
	options,
	value,
	onChange,
	disabled,
	...props
}, forwardedRef) => {
	const idRef = useRef(uniqueId('radiogroup-'));

	const componentRef = useMergedRef<HTMLUListElement>(forwardedRef);

	return <Styled.RadioGroup
		{...props}
		ref={componentRef}
	>
		{options.map((o, index) => {
			const optionId = `${idRef.current}-option-${index}`;
			const isChecked = value == o.value;

			return <Styled.RadioGroupOption key={optionId}>
				<Styled.RadioButton
					id={optionId}
					checked={isChecked}
					tabIndex={isChecked ? 0 : -1}
					onChange={disabled ? undefined : () => onChange(o.value)}
					disabled={disabled}
				/>
				<label htmlFor={optionId}>
					{o.label || o.value}
				</label>
			</Styled.RadioGroupOption>;
		})}
	</Styled.RadioGroup>;
});

export default RadioGroup;