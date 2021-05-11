import {useState} from 'react';

import type {Story, Meta} from '@storybook/react';

import Table from 'components/Table';
import type {TableProps} from 'components/Table';

import themeDefault from 'utils/theme';

import {remToPx, pxToRem} from 'utils/functions';

import DocsPage from 'stories/DocsPage';

export default {
	title: 'Components/Inputs/Table',
	component: Table,
	argTypes: {
		columns: {
			description: 'Array of column objects',
			type: {
				summary: '{value: number | string; label?: string}[]',
				required: true
			},
			control: 'array',
			table: {
				category: 'Core'
			}
		},
		data: {
			description: 'Array of data objects',
			type: {
				summary: '{value: number | string; label: string}[]',
				required: true
			},
			control: 'array',
			table: {
				category: 'Core'
			}
		}
  	},
	parameters: {
		docs: {
			page: () => <DocsPage
				sourceLinks={[
					{
						path:'components/Table/Table.tsx',
						label: 'Component source'
					}, {
						path:'components/Table/Table.styles.ts',
						label: 'Styles source'
					}
				]}
			/>,
			description: {
				component: 'Search and select an option from an expandable dropdown menu'
			}
		}
	}
} as Meta;

const BasicTemplate: Story<TableProps> = args => {
	return <Table
		{...args}
	/>;
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
	columns: [
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
	],
	data: Array.from({length: 20}, (v, i) => ({
		id: i+1,
		name: `Name ${i+1}`,
		'name-short': `Short name ${i+1}`,
		description: `Description ${i+1}`
	}))
};