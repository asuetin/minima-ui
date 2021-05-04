import {useState} from 'react';

import type {Story, Meta} from '@storybook/react';

import CheckBox from 'components/CheckBox';
import type {CheckBoxProps} from 'components/CheckBox';

export default {
	title: 'Components/Inputs/CheckBox',
	component: CheckBox,
	argTypes: {
		checked: {
			description: 'Current state of the CheckBox',
			type: {
				summary: 'Boolean',
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
			description: 'State change handler function',
			type: {
				summary: 'Function',
				detail: '() => void',
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
			description: 'Disable the CheckBox',
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
			description: 'Make the CheckBox read-only',
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

const BasicTemplate: Story<CheckBoxProps> = args => {
	const [enabled, setEnabled] = useState(false);

	return <div
		style={{
			display: 'grid',
			gridTemplateColumns: 'min-content 1fr',
			gridGap: '0.5rem',
			alignItems: 'center'
		}}
	>
		<label htmlFor='checkbox'>Option:</label>
		<CheckBox
			{...args}
			id='checkbox'
			checked={enabled}
			onChange={() => setEnabled(enabledPrev => !enabledPrev)}
		/>
	</div>;
};

export const Basic = BasicTemplate.bind({});