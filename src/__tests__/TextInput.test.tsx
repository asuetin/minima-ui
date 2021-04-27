import {render, fireEvent} from '@testing-library/react';

import TextInput from 'components/TextInput';

describe('TextInput', () => {
	test('test value change behavior', async () => {
		let value = '';

		const {getByRole} = render(
			<>
				<label id='label' htmlFor='checkbox'>Option:</label>
				<TextInput
					id='checkbox'
					value={value}
					onChange={v => value = v}
					labelledBy='label'
				/>
			</>
		);

		fireEvent.change(getByRole('textbox'), {target: {value: 'message'}});

		expect(value).toEqual('message');
	});
});