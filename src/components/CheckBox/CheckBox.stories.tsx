import {useState} from 'react';

import type {Story, Meta} from '@storybook/react';

import CheckBox from 'components/CheckBox';
import type {CheckBoxProps} from 'components/CheckBox';

import DocsPage from 'stories/DocsPage';

export default {
	title: 'Components/Inputs/CheckBox',
	component: CheckBox,
	argTypes: {
		checked: {
			description: 'Current state of the CheckBox',
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
			description: 'Disable the CheckBox',
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
			description: 'Make the CheckBox read-only',
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
						path:'components/CheckBox/CheckBox.tsx',
						label: 'Component source'
					}, {
						path:'components/CheckBox/CheckBox.styles.ts',
						label: 'Styles source'
					}
				]}
			/>,
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