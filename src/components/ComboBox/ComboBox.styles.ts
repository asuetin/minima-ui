import styled, {css, keyframes} from 'styled-components';

import {pxToRem} from 'utils/functions';

import List from 'components/List';

const Option = styled.li`
	cursor: pointer;

	white-space: nowrap;
    text-overflow: ellipsis;
	overflow: hidden;

	display: block;
	padding: 0 0 0 var(--padding);

	&:hover {
		background-color: var(--color-option-background-hover);
	}

	&[aria-selected='true']{
		background-color: var(--color-option-background-selected);
	}
`;

const Dropdown = styled(List)<{height: number}>(({height}) => css`
	position: absolute;
	width: 100%;
	top: 100%;
	height: ${pxToRem(height)}rem;

	background-color: var(--color-dropdown-background);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	border-top-left-radius: 0;
	border-top-right-radius: 0;

	::-webkit-scrollbar {
		width: var(--width-scrollbar);
	}

	::-webkit-scrollbar-button {
		display: none;
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--color-scrollbar);
		border-radius: var(--border-radius);
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: var(--color-scrollbar-hover);
	}

	::-webkit-scrollbar-track,
	::-webkit-scrollbar-track-piece,
	::-webkit-resizer,
	::-webkit-scrollbar-corner {
		display: none;
	}

	animation: ${keyframes`
		0% {
			height: 0;
		}
		100% {
			height: ${pxToRem(height)}rem;
		}
	`} 125ms ease-in-out;
`);

const Button = styled.button`
	position: relative;
	cursor: pointer;
	border: none;
	outline: none;

	background-color: inherit;
	border-radius: inherit;

	display: flex;
	align-items: center;
	padding: 0 var(--padding) 0 var(--padding);

	> * {
		transition: ${['stroke', 'fill', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};
	}
`;

const Input = styled.input`
	position: relative;
	width: 100%;
	flex-grow: 1;
	padding: 0 0 0 var(--padding);

	background-color: inherit;
	border: none;
	border-radius: inherit;
	outline: none;
	font: inherit;
	transition: color 125ms ease-in-out;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;

	display: flex;
	align-items: center;
`;

const ComboBox = styled.div<{height: number}>`
	--color-background: rgb(240,240,240);
	--color-dropdown-background: rgb(230,230,230);
	--color-option-background-hover: rgb(220,220,220);
	--color-option-background-selected: rgb(210,210,210);

	--color-text: rgb(60,60,60);
	--color-text-hover: rgb(140,140,140);

	--color-arrow: rgb(60,60,60);
	--color-arrow-hover: rgb(140,140,140);

	--color-scrollbar: rgb(150,150,150);
	--color-scrollbar-hover: rgb(160,160,160);

	--box-shadow: 0 0.375rem 1.25rem 0 rgb(150,150,150);
	--box-shadow-focus: 0 0.375rem 1.25rem 0 rgb(150,150,150),
		0 0 0 0.125rem rgb(130,160,230);

	--border-radius: 0.375rem;
	--padding: 0.5rem;
	--width-scrollbar: 0.25rem;

	position: relative;
	height: ${({height}) => pxToRem(height)}rem;

	background-color: var(--color-background);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	font-family: 'Open Sans', sans-serif;

	display: flex;

	&, ${Input}{
		color: var(--color-text);
	}

	${Dropdown}{
		> * {
			line-height: ${({height}) => pxToRem(height)}rem;
		}
	}

	svg {
		stroke: var(--color-arrow);
		fill: var(--color-arrow);
	}

	*:focus {
		outline: none;
	}

	&:focus, &[aria-expanded='true']{
		outline: none;
		box-shadow: var(--box-shadow-focus);

		${Dropdown}{
			box-shadow: var(--box-shadow-focus);
		}
	}

	&[aria-expanded='false']:hover {
		&, ${Input}{
			color: var(--color-text-hover);
		}

		svg {
			stroke: var(--color-arrow-hover);
			fill: var(--color-arrow-hover);
		}
	}

	&[aria-expanded='true']{
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		${Button}{
			> * {
				transform: rotate(180deg);
			}

			&:hover svg {
				stroke: var(--color-arrow-hover);
				fill: var(--color-arrow-hover);
			}
		}
	}
`;

export default {ComboBox, Input, Button, Dropdown, Option};