import {render, fireEvent} from '@testing-library/react';

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
});