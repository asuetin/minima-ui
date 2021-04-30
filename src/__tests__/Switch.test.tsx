import {render, fireEvent} from '@testing-library/react';

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
});