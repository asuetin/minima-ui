import {render, fireEvent} from '@testing-library/react';

import CheckBox from 'components/CheckBox';

describe('CheckBox', () => {
	test('test check behavior', async () => {
		let enabled = false;

		const {getByLabelText} = render(
			<>
				<label id='label' htmlFor='checkbox'>Option:</label>
				<CheckBox
					id='checkbox'
					checked={enabled}
					onChange={() => enabled = !enabled}
					labelledBy='label'
				/>
			</>
		);

		fireEvent.click(getByLabelText('Option:'));

		expect(enabled).toEqual(true);
	});
});