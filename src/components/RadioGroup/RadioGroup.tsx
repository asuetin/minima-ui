import {forwardRef, useRef, HTMLAttributes} from 'react';

import {uniqueId, limitInRange} from 'utils/functions';
import {useMergedRef, useEvent} from 'utils/hooks';

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
	id,
	...props
}, forwardedRef) => {
	const idRef = useRef(id ?? uniqueId('radiogroup-'));

	const componentRef = useMergedRef<HTMLUListElement>(forwardedRef);

	//keyboard controls
	const incrementIndex = (v: number) => {
		if (componentRef.current.contains(document.activeElement)){
			let indexNext = options.findIndex(o => o.value == value) + v;
			indexNext = limitInRange(indexNext, [0, options.length-1], true);
			onChange(indexNext);
			document.getElementById(`${idRef.current}-option-${indexNext}`).focus();
		}
	};

	useEvent('keydown', (e: KeyboardEvent) => {
		if (!disabled){
			switch (e.code){
			case 'ArrowDown':
			case 'ArrowRight':
				incrementIndex(1);
				e.preventDefault();
				break;
			case 'ArrowUp':
			case 'ArrowLeft':
				incrementIndex(-1);
				e.preventDefault();
			}
		}
	});

	return <Styled.RadioGroup
		{...props}
		ref={componentRef}
		id={id}
	>
		{options.map((o, index) => {
			const optionId = `${idRef.current}-option-${index}`;
			const isChecked = value == o.value;

			return <Styled.RadioGroupOption
				key={optionId}
				aria-checked={isChecked}
			>
				<Styled.RadioButton
					id={optionId}
					checked={isChecked}
					tabIndex={isChecked ? 0 : -1}
					onChange={disabled ? undefined : () => onChange(o.value)}
					disabled={disabled}
				/>
				<label htmlFor={optionId}>
					{o.label ?? o.value}
				</label>
			</Styled.RadioGroupOption>;
		})}
	</Styled.RadioGroup>;
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;