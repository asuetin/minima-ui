import type {Story, Meta} from '@storybook/react';

import Icon, {presetIcons} from 'components/Icon';
import type {IconProps} from 'components/Icon';

export default {
	title: 'Components/Icon',
	component: Icon,
	argTypes: {
		preset: {
			description: 'Name of the preset icon to use',
			control: 'select',
			options: Object.keys(presetIcons),
			table: {
				type: {
					summary: 'user | logout | gear | forward | down | undo | save | reset | order | group | plus | search'
				},
				category: 'Core'
			}
		},
		path: {
			description: 'Custom SVG path to use',
			table: {
				type: {
					summary: 'SVGElement',
					detail: 'Excluding the core "svg" element'
				},
				category: 'Core'
			}
		},
		viewBoxSize: {
			description: 'Size of the viewbox for the custom SVG in pixels',
			table: {
				type: {
					summary: 'Positive integer',
				},
				category: 'Core'
			}
		},
		color: {
			description: 'Color of fill and stroke',
			control: 'color',
			defaultValue: 'black',
			table: {
				type: {
					summary: 'Color'
				},
				defaultValue: {
					summary: 'black'
				},
				category: 'Colors'
			}
		},
		size: {
			description: 'Size of the icon (overrides the default) in pixels',
			type: {
				summary: 'Positive integer'
			},
			control: 'number',
			table: {
				category: 'Geometry'
			}
		},
		strokeWidth: {
			description: 'Width of the stroke in pixels',
			control: 'number',
			defaultValue: 2,
			table: {
				type: {
					summary: 'Positive integer'
				},
				defaultValue: {
					summary: 2
				},
				category: 'Geometry'
			}
		}
  	},
	parameters: {
		docs: {
			description: {
				component: 'Scalable and customizable SVG icon',
			}
		}
	}
} as Meta;

const BasicTemplate: Story<IconProps> = args => <Icon {...args}/>;

export const Basic = BasicTemplate.bind({});
Basic.args = {
	preset: 'user'
};

export const Thin = BasicTemplate.bind({});
Thin.args = {
	...Basic.args,
	strokeWidth: 1
};

export const Scaled = BasicTemplate.bind({});
Scaled.args = {
	...Basic.args,
	size: 192
};

export const Recolored = BasicTemplate.bind({});
Recolored.args = {
	...Basic.args,
	color: 'red'
};

export const Custom = BasicTemplate.bind({});
Custom.args = {
	viewBoxSize: 24,
	path: <g fillOpacity='0' transform="translate(0 -1098.52)">
		<circle cy="1110.52" cx="12" r="11"/>
		<path d="M10 1116.52v-12h4"/>
		<path d="M8 1110.52h6.01M7.973 1113.52h6.054"/>
		<path d="m 14,1104.5197 a 3,3 0 0 1 3,3 3,3 0 0 1 -3,3"/>
	</g>
};