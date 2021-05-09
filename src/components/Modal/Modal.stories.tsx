import {useState} from 'react';
import styled from 'styled-components';

import type {Story, Meta} from '@storybook/react';

import Button from 'components/Button';
import Icon from 'components/Icon';

import Modal, {ModalStyles} from 'components/Modal';
import type {ModalProps} from 'components/Modal';

import DocsPage from 'stories/DocsPage';

export default {
	title: 'Components/Display/Modal',
	component: Modal,
	argTypes: {
		onClose: {
			description: 'This function is called when the user interacts with something outside the modal dialog',
			type: {
				summary: '() => void'
			},
			control: {
				disable: true
			},
			table: {
				category: 'Core'
			}
		}
  	},
	parameters: {
		docs: {
			page: () => <DocsPage
				sourceLinks={[
					{
						path:'components/Modal/Modal.tsx',
						label: 'Component source'
					}, {
						path:'components/Modal/Modal.styles.ts',
						label: 'Styles source'
					}
				]}
			/>,
			description: {
				component: 'Display a dialog above all other elements'
			}
		}
	}
} as Meta;

const {Content} = ModalStyles;

const ModalStyled = styled(Modal)`
	${Content}{
		display: grid;
		grid-template-rows: 1fr min-content;
		justify-items: center;
	}
`;

const BasicTemplate: Story<ModalProps> = args => {
	const [showModal, setShowModal] = useState(false);

	return <>
		<Button
			icon={<Icon
				preset='gear'
				size={22}
			/>}
			label='Settings'
			onClick={() => setShowModal(true)}
		/>
		{showModal &&
			<ModalStyled
				{...args}
				onClose={() => setShowModal(false)}
			>
				<span>This is the content of the modal dialog</span>
				<Button
					label='Close'
					onClick={() => setShowModal(false)}
				/>
			</ModalStyled>
		}
	</>;
};

export const Basic = BasicTemplate.bind({});