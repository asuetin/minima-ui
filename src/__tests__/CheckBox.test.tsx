import {render, fireEvent} from '@testing-library/react';

import {CheckBox} from '../';

describe('CheckBox', () => {
	test('test check behavior', async () => {
		let enabled = false;

		const {getByLabelText} = render(
			<>
				<label htmlFor='checkbox'>Option:</label>
				<CheckBox
					id='checkbox'
					checked={enabled}
					onChange={() => enabled = !enabled}
				/>
			</>
		);

		fireEvent.click(getByLabelText('Option:'));

		expect(enabled).toBeTruthy();
	});

	test('test "Enter" key behavior', async () => {
		let enabled = false;

		const {getByLabelText} = render(<>
			<label htmlFor='checkbox'>Option:</label>
			<CheckBox
				id='checkbox'
				checked={enabled}
				onChange={() => enabled = !enabled}
			/>
		</>);

		const checkBoxElement = getByLabelText('Option:');
		checkBoxElement.focus();
		fireEvent.keyDown(checkBoxElement, {code: 'Enter'});

		expect(enabled).toBeTruthy();
	});
});