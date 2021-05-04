import type {Story, Meta} from '@storybook/react';

import {useState} from 'react';

import {limitInRange} from 'utils/functions';
import {useInterval} from 'utils/hooks';

import ProgressBar from 'components/ProgressBar';
import type {ProgressBarProps} from 'components/ProgressBar';

export default {
	title: 'Components/ProgressBar',
	component: ProgressBar,
	argTypes: {
		value: {
			description: 'Current value of the ProgressBar',
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
			description: 'Range of the ProgressBar',
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
		}
  	},
	parameters: {
		docs: {
			description: {
				component: 'Display the progress of an operation'
			}
		}
	}
} as Meta;

const BasicTemplate: Story<ProgressBarProps> = ({range, ...args}) => {
	const [value, setValue] = useState(0);

	useInterval(() => {
		setValue(valuePrev => limitInRange(valuePrev+10, range, true));
	}, 1000, true);

	return <div
		style={{
			display: 'grid',
			alignItems: 'center',
			gridTemplateColumns: 'min-content 1fr',
			gridGap: '0.5rem'
		}}
	>
		<label id='label'>Progress:</label>
		<ProgressBar
			{...args}
			range={range}
			value={value}
			aria-labelledby='label'
		/>
	</div>;
};

export const Basic = BasicTemplate.bind({});