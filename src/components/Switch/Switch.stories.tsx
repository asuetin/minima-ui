import {useState} from 'react';

import type {Story, Meta} from '@storybook/react';

import Switch from 'components/Switch';
import type {SwitchProps} from 'components/Switch';

import DocsPage from 'stories/DocsPage';

export default {
	title: 'Components/Inputs/Switch',
	component: Switch,
	argTypes: {
		checked: {
			description: 'Current state of the Switch',
			type: {
				summary: 'boolean',
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
				summary: '() => void',
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
				summary: 'boolean'
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
				summary: 'boolean'
			},
			control: 'boolean',
			table: {
				category: 'Miscellaneous'
			}
		}
  	},
	parameters: {
		docs: {
			page: () => <DocsPage
				sourceLinks={[
					{
						path:'components/Switch/Switch.tsx',
						label: 'Component source'
					}, {
						path:'components/Switch/Switch.styles.ts',
						label: 'Styles source'
					}
				]}
			/>,
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