import {render} from '@testing-library/react';

import {Table} from '../';

const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');

beforeAll(() => {
	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {configurable: true, value: 32*10});
});

afterAll(() => {
	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
});

const columns = [
	{
		dataKey: 'id',
		header: 'ID',
		minWidth: 50
	}, {
		dataKey: 'name',
		header: 'Name',
		minWidth: 80
	}, {
		dataKey: 'name-short',
		header: 'Short name',
		minWidth: 125
	}, {
		dataKey: 'description',
		header: 'Description',
		sortable: false,
		minWidth: 125
	}
];

const data = Array.from({length: 20}, (v, i) => ({
	id: i+1,
	name: `Name ${i+1}`,
	'name-short': `Short name ${i+1}`,
	description: `Description ${i+1}`
}));

describe('Table', () => {
	test('render a table', async () => {
		const {getAllByText} = render(
			<Table
				columns={columns}
				data={data}
			/>
		);

		expect(getAllByText('Description', {exact: false}).length).toBeGreaterThan(10);
	});
});