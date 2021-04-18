import {render, fireEvent, waitFor} from '@testing-library/react';

import List from 'components/List';

const options = Array.from({length: 100}, (v, i) => ({
	value: i,
	label: `Option ${i+1}`
}));

const rowRenderer = (index, style) => {
	const {value, label} = options[index] || {};

	return <div
		style={style}
		key={`${index}-${value}`}
	>
		{label}
	</div>;
};

const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');

beforeAll(() => {
	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {configurable: true, value: 300});
});

afterAll(() => {
	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
});

describe('List', () => {
	test('render a virtualized list', async () => {
		const {container, findAllByText, getAllByText} = render(<List
			rowCount={options.length}
			rowRenderer={rowRenderer}
		/>);

		const optionElements = await findAllByText('Option', {exact: false});
		expect(optionElements.length).toBeLessThan(options.length);

		const firstElementText = optionElements[0].innerHTML;

		fireEvent.scroll(container.firstChild, {target: {scrollTop: 1500}});

		await waitFor(() => {
			const optionElements = getAllByText('Option', {exact: false});
			expect(optionElements[0].innerHTML).not.toEqual(firstElementText);
		});
	});
});