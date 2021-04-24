import {useState} from 'react';


import type {Story, Meta} from '@storybook/react';

import Button from 'components/Button';
import type {ButtonProps} from 'components/Button';

import Icon from 'components/Icon';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
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
		icon: {
			description: 'The button icon',
			type: {
				summary: 'Icon | SVGSVGElement | HTMLImageElement',
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
				summary: 'String',
			},
			control: 'text',
			table: {
				category: 'Core'
			}
		},
		labelledBy: {
			description: 'id of the label element for the Button',
			type: {
				summary: 'String',
			},
			control: {
				disable: true
			},
			table: {
				category: 'Miscellaneous'
			}
		},
		disabled: {
			description: 'Disable the Button',
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
		}
  	},
	parameters: {
		docs: {
			description: {
				component: 'Search and select an option from an expandable dropdown menu'
			}
		}
	}
} as Meta;

const BasicTemplate: Story<ButtonProps> = args => <Button {...args}/>;

export const Basic = BasicTemplate.bind({});
Basic.args = {
	icon: <Icon presetName='gear'/>,
	label: 'Settings'
};