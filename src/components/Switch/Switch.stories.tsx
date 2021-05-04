import {useState} from 'react';

import type {Story, Meta} from '@storybook/react';

import Switch from 'components/Switch';
import type {SwitchProps} from 'components/Switch';

export default {
	title: 'Components/Inputs/Switch',
	component: Switch,
	argTypes: {
		checked: {
			description: 'Current state of the Switch',
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
			description: 'Disable the Switch',
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
			description: 'Make the Switch read-only',
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
				component: 'Switch between two states'
			}
		}
	}
} as Meta;

const BasicTemplate: Story<SwitchProps> = args => {
	const [enabled, setEnabled] = useState(false);

	return <div
		style={{
			display: 'grid',
			gridTemplateColumns: 'min-content 1fr',
			gridGap: '0.5rem',
			alignItems: 'center'
		}}
	>
		<label id='label'>Power:</label>
		<Switch
			{...args}
			checked={enabled}
			onChange={() => setEnabled(enabledPrev => !enabledPrev)}
			aria-labelledby='label'
		/>
	</div>;
};

export const Basic = BasicTemplate.bind({});