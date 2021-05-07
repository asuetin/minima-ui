import {useState} from 'react';

import type {Story, Meta} from '@storybook/react';

import ComboBox from 'components/ComboBox';
import type {ComboBoxProps} from 'components/ComboBox';

import themeDefault from 'utils/theme';

import {remToPx, pxToRem} from 'utils/functions';

import DocsPage from 'stories/DocsPage';

export default {
	title: 'Components/Inputs/ComboBox',
	component: ComboBox,
	argTypes: {
		height: {
			description: 'Height of the ComboBox and the option rows in px',
			type: {
				summary: 'number'
			},
			control: 'number',
			defaultValue: remToPx(themeDefault.size[3]),
			table: {
				defaultValue: {
					summary: remToPx(themeDefault.size[3])
				},
				category: 'Geometry'
			}
		},
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
		groups: {
			description: 'Array of group objects',
			type: {
				summary: '{value: number | string; label: string}[]'
			},
			control: 'array',
			table: {
				category: 'Core'
			}
		},
		value: {
			description: 'Current value of the ComboBox',
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
		visibleOptionCount: {
			description: 'Number of visible options in the dropdown',
			type: {
				summary: 'number'
			},
			control: 'number',
			defaultValue: 5,
			table: {
				defaultValue: {
					summary: 5
				},
				category: 'Geometry'
			}
		},
		chevron: {
			description: 'Custom icon to replace the default arrow',
			type: {
				summary: 'Icon | SVGSVGElement | HTMLImageElement',
			},
			control: {
				disable: true
			},
			table: {
				category: 'Miscellaneous'
			}
		},
		searchDisabled: {
			description: 'Disable search functionality',
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
		disabled: {
			description: 'Disable the ComboBox',
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
						path:'components/ComboBox/ComboBox.tsx',
						label: 'Component source'
					}, {
						path:'components/ComboBox/ComboBox.styles.ts',
						label: 'Styles source'
					}
				]}
			/>,
			description: {
				component: 'Search and select an option from an expandable dropdown menu'
			}
		}
	}
} as Meta;

const BasicTemplate: Story<ComboBoxProps> = ({height, visibleOptionCount, ...args}) => {
	const [value, setValue] = useState(0);

	return <div style={{height: `${pxToRem(height*(visibleOptionCount+2))}rem`}}>
		<ComboBox
			{...args}
			value={value}
			onChange={(v: number) => setValue(v)}
		/>
	</div>;
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
	options: Array.from({length: 20}, (v, i) => ({
		value: i,
		label: `Option ${i+1}`
	}))
};

const MultiselectableTemplate: Story<ComboBoxProps> = ({height, visibleOptionCount, ...args}) => {
	const [value, setValue] = useState([2, 4]);

	return <div style={{height: `${pxToRem(height*(visibleOptionCount+2))}rem`}}>
		<ComboBox
			{...args}
			value={value}
			onChange={(v: number[]) => setValue(v)}
		/>
	</div>;
};

export const Multiselectable = MultiselectableTemplate.bind({});
Multiselectable.args = {
	...Basic.args
};

export const Grouped = BasicTemplate.bind({});
Grouped.args = {
	...Basic.args,
	options: Array.from({length: 20}, (v, i) => ({
		value: i,
		label: `Option ${i+1}`,
		group: i%4
	})),
	groups: Array.from({length: 4}, (v, i) => ({
		value: i,
		label: `Group ${i+1}`
	}))
};