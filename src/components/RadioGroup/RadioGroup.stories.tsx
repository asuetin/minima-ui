import {useState} from 'react';

import type {Story, Meta} from '@storybook/react';

import RadioGroup from 'components/RadioGroup';
import type {RadioGroupProps} from 'components/RadioGroup';

import DocsPage from 'stories/DocsPage';

export default {
	title: 'Components/Inputs/RadioGroup',
	component: RadioGroup,
	argTypes: {
		options: {
			description: 'Array of option objects',
			type: {
				summary: '{value: number | string; label?: string}[]',
				required: true
			},
			control: 'array',
			table: {
				category: 'Core'
			}
		},
		value: {
			description: 'Current value of the RadioGroup',
			type: {
				summary: 'number | string',
				required: true
			},
			control: {
				disable: true
			},
			table: {
				category: 'Core'
			}
		},
		onChange: {
			description: 'Value change handler function',
			type: {
				summary: '(v: string | number) => void',
				required: true
			},
			control: {
				disable: true
			},
			table: {
				category: 'Core'
			}
		},
		disabled: {
			description: 'Disable the RadioGroup',
			type: {
				summary: 'boolean',
			},
			control: 'boolean',
			defaultValue: false,
			table: {
				defaultValue: {
					summary: false
				},
				category: 'Miscellaneous'
			}
		}
  	},
	parameters: {
		docs: {
			page: () => <DocsPage
				sourceLinks={[
					{
						path:'components/RadioGroup/RadioGroup.tsx',
						label: 'Component source'
					}, {
						path:'components/RadioGroup/RadioGroup.styles.ts',
						label: 'Styles source'
					}
				]}
			/>,
			description: {
				component: 'Select an option from a set of radio buttons'
			}
		}
	}
} as Meta;

const BasicTemplate: Story<RadioGroupProps> = args => {
	const [value, setValue] = useState(0);

	return <div style={{width: '20rem'}}>
		<RadioGroup
			{...args}
			value={value}
			onChange={(v: number) => setValue(v)}
		/>
	</div>;
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
	options: Array.from({length: 6}, (v, i) => ({
		value: i,
		label: `Option ${i+1}`
	}))
};