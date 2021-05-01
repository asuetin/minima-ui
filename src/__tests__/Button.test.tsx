import {render, fireEvent, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from 'components/Button';

describe('Button', () => {
	test('test click behavior', async () => {
		let value = 0;

		const {getByText} = render(<Button
			onClick={() => ++value}
			label='Button'
		/>);

		fireEvent.click(getByText('Button'));

		expect(value).toEqual(1);
	});

	test('test "Enter" key behavior', async () => {
		let value = 0;

		render(<Button
			onClick={() => value = value+1}
			label='Button'
		/>);

		const buttonElement = screen.getByRole('button');
		buttonElement.focus();
		userEvent.type(buttonElement, '{enter}', {skipClick: true});

		expect(value).toEqual(1);
	});
});