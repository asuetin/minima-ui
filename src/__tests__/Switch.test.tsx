import {render, fireEvent} from '@testing-library/react';

import Switch from 'components/Switch';

describe('Switch', () => {
	test('test click behavior', async () => {
		let enabled = false;

		const {getByRole} = render(
			<>
				<label id='label'>Power:</label>
				<Switch
					value={enabled}
					onClick={() => enabled = !enabled}
					labelledBy='label'
				/>
			</>
		);

		fireEvent.click(getByRole('switch'));

		expect(enabled).toEqual(true);
	});
});