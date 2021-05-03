import type {Story, Meta} from '@storybook/react';

import {FC, Fragment, useState, useCallback, useRef, useEffect} from 'react';

import Slider from 'components/Slider';
import type {SliderProps} from 'components/Slider';

import Icon from 'components/Icon';

export default {
	title: 'Components/Slider',
	component: Slider,
	argTypes: {
		value: {
			description: 'Current value of the ComboBox',
			type: {
				summary: 'number | [number, number]',
				required: true
			},
			control: {
				disable: true
			},
			table: {
				category: 'Core'
			}
		},
		range: {
			description: 'Current value of the ComboBox',
			type: {
				summary: '[number, number]',
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
				summary: 'Function',
				detail: '(v: number | [number, number]) => void',
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
			description: 'Disable the Slider',
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
				component: 'A basic button with an icon, a label, or both'
			}
		}
	}
} as Meta;

const BasicTemplate: Story<SliderProps> = args => {
	const [value, setValue] = useState<[number, number]>([33, 66]);

	return <Slider
		{...args}
		value={value}
		onChange={(v: [number, number]) => setValue(v)}
		range={[-100, 100]}
	/>;
};

export const Basic = BasicTemplate.bind({});