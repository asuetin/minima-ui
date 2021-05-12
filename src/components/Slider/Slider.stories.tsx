import type {Story, Meta} from '@storybook/react';

import { useState} from 'react';

import Slider from 'components/Slider';
import type {SliderProps} from 'components/Slider';

import DocsPage from 'stories/DocsPage';

export default {
	title: 'Components/Inputs/Slider',
	component: Slider,
	argTypes: {
		value: {
			description: 'Current value of the Slider',
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
			description: 'Range of the Slider',
			type: {
				summary: '[number, number]',
				required: true
			},
			defaultValue: [0, 100],
			table: {
				defaultValue: {
					summary: [0, 100]
				},
				category: 'Core'
			}
		},
		onChange: {
			description: 'Value change handler function',
			type: {
				summary: '(v: number | [number, number]) => void',
				required: true
			},
			control: {
				disable: true
			},
			table: {
				category: 'Core'
			}
		},
		step: {
			description: 'Step for changing the value with arrow keys',
			type: {
				summary: 'number'
			},
			control: 'number',
			table: {
				category: 'Miscellaneous'
			}
		},
		bigStep: {
			description: 'Step for changing the value with page keys',
			type: {
				summary: 'number'
			},
			control: 'number',
			table: {
				category: 'Miscellaneous'
			}
		},
		minSpan: {
			description: 'Minimal span in multi-thumb mode',
			type: {
				summary: 'number',
			},
			control: 'number',
			table: {
				category: 'Miscellaneous'
			}
		},
		disabled: {
			description: 'Disable the Slider',
			type: {
				summary: 'boolean',
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
						path:'components/Slider/Slider.tsx',
						label: 'Component source'
					}, {
						path:'components/Slider/Slider.styles.ts',
						label: 'Styles source'
					}
				]}
			/>,
			description: {
				component: 'Choose either a single value or a range between min and max values'
			}
		}
	}
} as Meta;

const BasicTemplate: Story<SliderProps> = args => {
	const [value, setValue] = useState(33);

	return <div
		style={{
			display: 'grid',
			alignItems: 'center',
			gridTemplateColumns: '12rem 8rem',
			gridGap: '0.5rem'
		}}
	>
		<Slider
			{...args}
			value={value}
			onChange={(v: number) => setValue(v)}
			aria-labelledby='label'
		/>
		<label id='label'>{value.toFixed(2)}</label>
	</div>;
};

export const Basic = BasicTemplate.bind({});

const MultiThumbTemplate: Story<SliderProps> = args => {
	const [value, setValue] = useState<[number, number]>([33, 66]);

	return <div
		style={{
			display: 'grid',
			alignItems: 'center',
			gridTemplateColumns: '12rem 10rem',
			gridGap: '0.5rem'
		}}
	>
		<Slider
			{...args}
			value={value}
			onChange={(v: [number, number]) => setValue(v)}
			aria-labelledby='label'
		/>
		<label id='label'>{`[${value.map(v => v.toFixed(2)).join()}]`}</label>
	</div>;
};

export const MultiThumb = MultiThumbTemplate.bind({});
MultiThumb.args = {
	range: [-100, 100]
};