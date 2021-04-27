import {useState} from 'react';

import type {Story, Meta} from '@storybook/react';

import TextInput from 'components/TextInput';
import type {TextInputProps} from 'components/TextInput';

export default {
	title: 'Components/TextInput',
	component: TextInput,
	argTypes: {
		value: {
			description: 'Current value of the TextInput',
			type: {
				summary: 'Boolean'
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
				summary: 'Function',
				detail: '(v: string) => void',
				required: true
			},
			control: {
				disable: true
			},
			table: {
				category: 'Core'
			},
			action: 'click'
		},
		multiline: {
			description: 'Enable multi-line mode',
			type: {
				summary: 'Boolean',
			},
			control: 'boolean',
			table: {
				category: 'Core'
			}
		},
		labelledBy: {
			description: 'id of the label element for the TextInput',
			type: {
				summary: 'String',
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
			description: 'Disable the TextInput',
			type: {
				summary: 'Boolean',
			},
			control: 'boolean',
			defaultValue: false,
			table: {
				defaultValue: {
					summary: false
				},
				category: 'Miscellaneous'
			}
		},
		readOnly: {
			description: 'Make the TextInput read-only',
			type: {
				summary: 'Boolean',
			},
			control: 'boolean',
			table: {
				category: 'Miscellaneous'
			}
		}
  	},
	parameters: {
		docs: {
			description: {
				component: 'A basic checkbox'
			}
		}
	}
} as Meta;

const BasicTemplate: Story<TextInputProps> = args => {
	const [value, setValue] = useState('');

	return <div
		style={{
			display: 'grid',
			gridTemplateColumns: 'min-content 1fr',
			gridGap: '0.5rem',
			alignItems: 'center'
		}}
	>
		<label id='label'>Message:</label>
		<TextInput
			{...args}
			value={value}
			onChange={setValue}
			labelledBy='label'
			placeholder='Enter message text'
		/>
	</div>;
};

export const Basic = BasicTemplate.bind({});