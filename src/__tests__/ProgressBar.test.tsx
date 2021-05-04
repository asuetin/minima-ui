import {render} from '@testing-library/react';

import ProgressBar from 'components/ProgressBar';

describe('ProgressBar', () => {
	test('render a progress bar', async () => {
		const {queryAllByText} = render(<ProgressBar
			range={[0, 100]}
			value={33}
		/>);

		expect(queryAllByText('33%').length).toBeGreaterThan(0);
	});
});