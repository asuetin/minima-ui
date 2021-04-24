import {forwardRef, useState, useEffect, useRef, HTMLAttributes} from 'react';

import type {Story, Meta} from '@storybook/react';

import Switch from 'components/Switch';
import type {SwitchProps} from 'components/Switch';

export default {
	title: 'Components/Switch',
	component: Switch,
	argTypes: {
		value: {
			description: 'Current state of the Switch',
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
		onClick: {
			description: 'Click handler function',
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
			},
			action: 'click'
		},
		labelledBy: {
			description: 'id of the label element for the Switch',
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
			value={enabled}
			onClick={() => setEnabled(enabledPrev => !enabledPrev)}
			labelledBy='label'
		/>
	</div>;
};

export const Basic = BasicTemplate.bind({});