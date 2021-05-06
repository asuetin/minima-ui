import type {Story, Meta} from '@storybook/react';

import List from 'components/List';
import type {ListProps} from 'components/List';

import {remToPx} from 'utils/functions';

import themeDefault from 'utils/theme';

import DocsPage from 'stories/DocsPage';

export default {
	title: 'Components/Utility/List',
	component: List,
	argTypes: {
		rowHeight: {
			description: 'Height of rows in the list in pixels',
			type: {
				summary: 'number'
			},
			control: 'number',
			defaultValue: remToPx(themeDefault.size[3]),
			table: {
				category: 'Geometry',
				defaultValue: {
					summary: remToPx(themeDefault.size[3])
				}
			}
		},
		rowCount: {
			description: 'Number of rows in the list',
			type: {
				summary: 'number',
				required: true
			},
			control: 'number',
			table: {
				category: 'Core'
			}
		},
		rowRenderer: {
			description: 'Renderer function for the rows in the list. The rendered row must utilize the style argument as a prop and have a unique key prop.',
			type: {
				summary: '(index: number, style: {[key: string]: string}) => ReactElement',
				required: true
			},
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
						path:'components/List/List.tsx',
						label: 'Component source'
					}, {
						path:'components/List/List.styles.ts',
						label: 'Styles source'
					}
				]}
			/>,
			description: {
				component: 'Virtualized list'
			}
		}
	}
} as Meta;

const BasicTemplate: Story<ListProps> = args =>
	<div style={{height: '10rem'}}>
		<List {...args}/>
	</div>;

export const Basic = BasicTemplate.bind({});
Basic.args = {
	rowCount: 1000,
	rowRenderer: (index, style) =>
		<div
			style={style}
			key={`option-${index}`}
		>
			{`Option ${index+1}`}
		</div>
};
Basic.parameters = {
	a11y: {
		disable: true
	},
};