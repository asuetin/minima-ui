import {render, fireEvent} from '@testing-library/react';

import {RadioGroup} from '../';

const options = Array.from({length: 100}, (v, i) => ({
	value: i,
	label: `Option ${i+1}`
}));

describe('RadioGroup', () => {
	test('change the value of the RadioGroup with a mouse', async () => {
		let value = 0;

		const {getByLabelText} = render(<RadioGroup
			options={options}
			value={value}
			onChange={(v: number) => value = v}
		/>);

		fireEvent.click(getByLabelText('Option 3'));

		expect(value).toEqual(2);
	});

	test('change the value of a combobox with a keyboard', async () => {
		let value = 0;

		const {container, getByLabelText} = render(<RadioGroup
			options={options}
			value={value}
			onChange={(v: number) => value = v}
		/>);

		getByLabelText('Option 1').focus();
		fireEvent.keyDown(container, {code: 'ArrowDown'});
		expect(value).toEqual(1);
	});
});