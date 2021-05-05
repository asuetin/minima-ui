import {render, fireEvent} from '@testing-library/react';

import {TextInput} from '../';

describe('TextInput', () => {
	test('test value change behavior', async () => {
		let value = '';

		const {getByRole} = render(
			<>
				<label htmlFor='checkbox'>Option:</label>
				<TextInput
					id='checkbox'
					value={value}
					onChange={v => value = v}
				/>
			</>
		);

		fireEvent.change(getByRole('textbox'), {target: {value: 'message'}});

		expect(value).toEqual('message');
	});
});