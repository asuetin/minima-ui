import {render} from '@testing-library/react';

import {Tooltip, Button} from '../';

describe('Tooltip', () => {
	test('render a component with a tooltip wrapper', async () => {
		render(<Tooltip text='Button tooltip'>
			<Button
				onClick={jest.fn()}
				label='Button'
			/>
		</Tooltip>);
	});
});