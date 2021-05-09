import {render, fireEvent} from '@testing-library/react';

import {Modal} from '../';

describe('Modal', () => {
	test('test showing and hiding behavior', async () => {
		let showModal = true;

		const {getByRole} = render(
			showModal ? <Modal onClose={() => showModal = false}>
				Content
			</Modal> : null
		);

		fireEvent.click(getByRole('dialog').parentNode);

		expect(showModal).not.toBeTruthy();
	});
});