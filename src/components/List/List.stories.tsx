import type {Story, Meta} from '@storybook/react';

import List from 'components/List';
import type {ListProps} from 'components/List';

export default {
	title: 'Components/List',
	component: List,
	argTypes: {
		rowHeight: {
			description: 'Height of rows in the list in pixels',
			type: {
				summary: 'Positive integer'
			},
			control: 'number',
			defaultValue: 32,
			table: {
				category: 'Geometry',
				defaultValue: {
					summary: 32
				}
			}
		},
		rowCount: {
			description: 'Number of rows in the list',
			type: {
				summary: 'Positive integer',
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
				summary: 'Function',
				detail: '(index: number, style: {[key: string]: string}) => ReactElement',
				required: true
			},
			table: {
				category: 'Core'
			}
		}
  	},
	parameters: {
		docs: {
			description: {
				component: 'Virtualized list'
			}
		}
	}
} as Meta;

const Template: Story<ListProps> = args =>
	<div style={{height: '10rem'}}>
		<List {...args}/>
	</div>;

export const Basic = Template.bind({});
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