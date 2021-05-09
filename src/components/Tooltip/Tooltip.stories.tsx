import type {Story, Meta} from '@storybook/react';

import Button from 'components/Button';
import Icon from 'components/Icon';

import Tooltip from 'components/Tooltip';
import type {TooltipProps} from 'components/Tooltip';

import DocsPage from 'stories/DocsPage';

export default {
	title: 'Components/Utility/Tooltip',
	component: Tooltip,
	argTypes: {
		text: {
			description: 'Text to display on the tooltip',
			type: {
				summary: 'string',
				required: true
			},
			table: {
				category: 'Core'
			}
		},
		delay: {
			description: 'The delay before the tooltip becomes visible',
			type: {
				summary: 'number'
			},
			control: 'number',
			defaultValue: 375,
			table: {
				defaultValue: {
					summary: 375
				},
				category: 'Core'
			}
		}
  	},
	parameters: {
		docs: {
			page: () => <DocsPage
				sourceLinks={[
					{
						path:'components/Tooltip/Tooltip.tsx',
						label: 'Component source'
					}, {
						path:'components/Tooltip/Tooltip.styles.ts',
						label: 'Styles source'
					}
				]}
			/>,
			description: {
				component: 'Display a tooltip on hover'
			}
		}
	}
} as Meta;

const BasicTemplate: Story<TooltipProps> = args =>
	<Tooltip {...args}>
		<Button
			icon={<Icon
				preset='gear'
				size={22}
			/>}
			label='Settings'
			onClick={undefined}
		/>
	</Tooltip>;

export const Basic = BasicTemplate.bind({});
Basic.args = {
	text: 'This is the Tooltip for the Settings button'
};