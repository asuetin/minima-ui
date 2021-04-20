import {useState} from 'react';

import styled from 'styled-components';

import type {Story, Meta} from '@storybook/react';

import ComboBox, {ComboBoxStyles} from 'components/ComboBox';
import type {ComboBoxProps} from 'components/ComboBox';

import {isUndef, pxToRem} from 'utils/functions';

export default {
	title: 'Components/ComboBox',
	component: ComboBox,
	argTypes: {
		height: {
			description: 'Height of the ComboBox and the option rows',
			type: {
				summary: 'Positive integer (px)'
			},
			control: 'number',
			defaultValue: 32,
			table: {
				defaultValue: {
					summary: 32
				},
				category: 'Geometry'
			}
		},
		options: {
			description: 'Array of option objects',
			type: {
				summary: 'Array of objects',
				detail: '{value: number | string; label?: string}[]',
				required: true
			},
			control: 'array',
			table: {
				category: 'Core'
			}
		},
		value: {
			description: 'Current value of the ComboBox',
			type: {
				summary: 'String | Integer',
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
				detail: '(v: string | number) => void',
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
				summary: 'Positive integer',
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
		arrowIcon: {
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
		labelledBy: {
			description: 'id of the label element for the ComboBox',
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
		searchDisabled: {
			description: 'Disable search functionality',
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
		disabled: {
			description: 'Disable the ComboBox',
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

const BasicTemplate: Story<ComboBoxProps> = ({options, height, visibleOptionCount, searchDisabled, disabled}) => {
	const [value, setValue] = useState(0);

	return <div style={{height: `${pxToRem((height || 32)*(visibleOptionCount+2))}rem`}}>
		<ComboBox
			height={height || undefined}
			visibleOptionCount={isUndef(visibleOptionCount) ? undefined : visibleOptionCount}
			options={options}
			value={value}
			onChange={(v: number) => setValue(v)}
			searchDisabled={searchDisabled}
			disabled={disabled}
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

const MultiselectableTemplate: Story<ComboBoxProps> = ({options, height, visibleOptionCount, searchDisabled, disabled}) => {
	const [value, setValue] = useState([2, 4]);

	return <div style={{height: `${pxToRem((height || 32)*(visibleOptionCount+2))}rem`}}>
		<ComboBox
			height={height || undefined}
			visibleOptionCount={isUndef(visibleOptionCount) ? undefined : visibleOptionCount}
			options={options}
			value={value}
			onChange={(v: number[]) => setValue(v)}
			searchDisabled={searchDisabled}
			disabled={disabled}
		/>
	</div>;
};

export const Multiselectable = MultiselectableTemplate.bind({});
Multiselectable.args = {
	...Basic.args
};

const GroupedTemplate: Story<ComboBoxProps> = ({options, groups}) => {
	const [value, setValue] = useState(0);

	return <div style={{height: '14rem'}}>
		<ComboBox
			options={options}
			groups={groups}
			value={value}
			onChange={(v: number) => setValue(v)}
		/>
	</div>;
};

export const Grouped = GroupedTemplate.bind({});
Grouped.args = {
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

const {Option} = ComboBoxStyles;
const ComboBoxStyled = styled(ComboBox)`
	--color-background: white;
	--color-dropdown-background: white;
	--color-option-background-hover: none;
	--color-option-background-selected: rgb(237,231,246);

	--color-arrow: rgb(126,87,194);
	--color-arrow-hover: rgb(179,157,219);

	--border-radius: 0;

	--box-shadow: 0 0 0 0.125rem rgb(126,87,194);
	--box-shadow-focus: 0 0 0 0.125rem rgb(126,87,194);

	${Option}{
		&:hover {
			color: rgb(149,117,205);
		}
	}
`;

const StyledTemplate: Story<ComboBoxProps> = ({options}) => {
	const [value, setValue] = useState(0);

	return <div style={{height: '14rem'}}>
		<ComboBoxStyled
			options={options}
			value={value}
			onChange={(v: number) => setValue(v)}
			arrowIcon={
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
					<path d="M0 3l6 7 6-7z" strokeOpacity="0"/>
				</svg> as unknown as SVGSVGElement
			}
		/>
	</div>;
};

export const Styled = StyledTemplate.bind({});
Styled.args = {
	...Basic.args
};
Styled.argTypes = {
	disabled: {
		control: {
			disable: true
		}
	}
};