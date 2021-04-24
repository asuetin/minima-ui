import {useState} from 'react';

import styled from 'styled-components';

import type {Story, Meta} from '@storybook/react';

import ComboBox, {ComboBoxStyles} from 'components/ComboBox';
import type {ComboBoxProps} from 'components/ComboBox';

import {size} from 'utils/styleVars';

import {remToPx, pxToRem} from 'utils/functions';

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
			defaultValue: remToPx(size.M),
			table: {
				defaultValue: {
					summary: remToPx(size.M)
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
		groups: {
			description: 'Array of group objects',
			type: {
				summary: 'Array of objects',
				detail: '{value: number | string; label: string}[]'
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

const {Dropdown, Option} = ComboBoxStyles;
const ComboBoxStyled = styled(ComboBox)`
	--color-background: white;
	--color-background-light: white;
	--color-dropdown-background: white;
	--color-option-background-hover: none;
	--color-option-background-selected: rgb(237,231,246);

	--color-accent: rgb(126,87,194);
	--color-accent-light: rgb(179,157,219);

	--border-radius: 0;

	--shadow: none;
	--light: none;
	--focus: 0 0 0 ${1/16}rem rgb(126,87,194);

	&, ${Dropdown}{
		border: 0.125rem solid rgb(126,87,194);
	}

	${Dropdown}{
		left: -0.125rem;
	}

	${Option}{
		&:hover {
			color: rgb(149,117,205);
		}
	}

	&[aria-expanded='false']{
		&:focus {
			box-shadow: var(--focus);
		}
	}

	&[aria-expanded='true']{
		border-bottom: none;

		${Dropdown}{
			border-top: none;
		}
	}
`;

const StyledTemplate: Story<ComboBoxProps> = ({height, visibleOptionCount, ...args}) => {
	const [value, setValue] = useState(0);

	return <div style={{height: `${pxToRem(height*(visibleOptionCount+2))}rem`}}>
		<ComboBoxStyled
			{...args}
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