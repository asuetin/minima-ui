import type {Story, Meta} from '@storybook/react';

import Button from 'components/Button';
import type {ButtonProps} from 'components/Button';

import Icon from 'components/Icon';

import DocsPage from 'stories/DocsPage';

export default {
	title: 'Components/Inputs/Button',
	component: Button,
	argTypes: {
		onClick: {
			description: 'Click handler function',
			type: {
				summary: '() => void',
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
		href: {
			description: 'The link to use in hyperlink mode',
			type: {
				summary: 'string'
			},
			control: 'text',
			table: {
				category: 'Core'
			}
		},
		icon: {
			description: 'The button icon',
			type: {
				summary: 'Icon | SVGSVGElement | HTMLImageElement'
			},
			control: {
				disable: true
			},
			table: {
				category: 'Core'
			}
		},
		label: {
			description: 'The button label',
			type: {
				summary: 'string'
			},
			control: 'text',
			table: {
				category: 'Core'
			}
		},
		disabled: {
			description: 'Disable the Button',
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
		}
  	},
	parameters: {
		docs: {
			page: () => <DocsPage
				sourceLinks={[
					{
						path:'components/Button/Button.tsx',
						label: 'Component source'
					}, {
						path:'components/Button/Button.styles.ts',
						label: 'Styles source'
					}
				]}
			/>,
			description: {
				component: 'A basic button with an option to act as a hyperlink'
			}
		}
	}
} as Meta;

const BasicTemplate: Story<ButtonProps> = args => <Button {...args}/>;

export const Basic = BasicTemplate.bind({});
Basic.args = {
	icon: <Icon
		preset='gear'
		size={22}
	/>,
	label: 'Settings'
};