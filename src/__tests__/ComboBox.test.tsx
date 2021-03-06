import {render, fireEvent} from '@testing-library/react';

import {ComboBox} from '../';

const options = Array.from({length: 100}, (v, i) => ({
	value: i,
	label: `Option ${i+1}`
}));

const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');

beforeAll(() => {
	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {configurable: true, value: 300});
});

afterAll(() => {
	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
});

describe('ComboBox', () => {
	test('change the value of a combobox with a mouse', async () => {
		let value: string | number = 0;

		const {getByDisplayValue, getByText, rerender} = render(<ComboBox
			options={options}
			value={value}
			onChange={(v: string | number) => value = v}
		/>);

		fireEvent.click(getByDisplayValue('Option 1'));
		fireEvent.click(getByText('Option 3'));

		rerender(<ComboBox
			options={options}
			value={value}
			onChange={(v: string | number) => value = v}
		/>);

		expect(getByDisplayValue('Option 3')).toBeTruthy();
	});

	test('change the value of a combobox with a keyboard', async () => {
		let value: string | number = 0;

		const {getByDisplayValue, getByText, rerender} = render(<ComboBox
			options={options}
			value={value}
			onChange={(v: string | number) => value = v}
		/>);

		const inputElement = getByDisplayValue('Option 1');

		fireEvent.keyDown(inputElement, {code: 'Enter'});
		getByText('Option 3');
		for (let i = 0; i < 2; ++i){
			fireEvent.keyDown(inputElement, {code: 'ArrowDown'});
		}
		fireEvent.keyDown(inputElement, {code: 'Enter'});

		rerender(<ComboBox
			options={options}
			value={value}
			onChange={(v: string | number) => value = v}
		/>);

		expect(getByDisplayValue('Option 3')).toBeTruthy();
	});
});