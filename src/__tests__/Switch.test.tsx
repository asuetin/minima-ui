import {render, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Switch from 'components/Switch';

describe('Switch', () => {
	test('test switch behavior', async () => {
		let enabled = false;

		const {getByRole} = render(
			<>
				<label id='label'>Power:</label>
				<Switch
					checked={enabled}
					onChange={() => enabled = !enabled}
					aria-labelledby='label'
				/>
			</>
		);

		fireEvent.click(getByRole('switch'));

		expect(enabled).toEqual(true);
	});

	test('test "Enter" key behavior', async () => {
		let enabled = false;

		const {getByRole} = render(<>
			<label id='label'>Power:</label>
			<Switch
				checked={enabled}
				onChange={() => enabled = !enabled}
				aria-labelledby='label'
			/>
		</>);

		const switchElement = getByRole('switch');
		switchElement.focus();
		userEvent.type(switchElement, '{enter}', {skipClick: true});

		expect(enabled).toBeTruthy();
	});
});