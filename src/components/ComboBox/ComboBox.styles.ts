import styled, {css, keyframes} from 'styled-components';

import {pxToRem} from 'utils/functions';

import List from 'components/List';

const Option = styled.li`
	position: relative;

	white-space: nowrap;
    text-overflow: ellipsis;
	overflow: hidden;

	display: block;
	padding: 0;
	padding-left: var(--padding);
	transition: padding-left 125ms ease-in-out;

	&[role='option']{
		cursor: pointer;
	}

	&[role='option']:hover {
		background-color: var(--color-option-background-hover);
	}

	&:not([role='option']){
		font-size: 80%;
		font-weight: bold;
		text-align: center;
		transform: translateY(20%);
	}

	&[aria-selected='true']{
		background-color: var(--color-option-background-selected);
	}

	&[aria-checked='true']{
		padding-left: calc(var(--size-check-indicator) + var(--padding) * 2);

		animation: ${keyframes`
			0% {
				padding-left: var(--padding);
			}
			100% {
				padding-left: calc(var(--size-check-indicator) + var(--padding) * 2);
			}
		`} 125ms ease-in-out;

		&::before {
			position: absolute;
			content: '';
			top: calc(50% - var(--size-check-indicator) / 2);
			left: calc((var(--padding) + var(--size-check-indicator)) / 2);
			width: var(--size-check-indicator);
			height: var(--size-check-indicator);

			border-radius: 50%;
			background: var(--color-check-indicator);

			animation: ${keyframes`
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			`} 125ms ease-in-out;
		}
	}
`;

const Dropdown = styled(List)<{visibleOptionCount: number}>(({rowHeight, rowCount, visibleOptionCount}) => css`
	--height: ${pxToRem(rowHeight*Math.min(visibleOptionCount, rowCount || 1))}rem;

	position: absolute;
	width: 100%;
	top: 100%;
	height: var(--height);

	background-color: var(--color-dropdown-background);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	border-top-left-radius: 0;
	border-top-right-radius: 0;

	> * {
		line-height: ${pxToRem(rowHeight)}rem;
	}

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
			height: var(--height);
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

	color: var(--color-text);
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
	--color-background-disabled: rgb(210,210,210);
	--color-dropdown-background: rgb(230,230,230);
	--color-option-background-hover: rgb(220,220,220);
	--color-option-background-selected: rgb(210,210,210);

	--color-text: rgb(60,60,60);
	--color-text-hover: rgb(140,140,140);

	--color-arrow: rgb(60,60,60);
	--color-arrow-hover: rgb(140,140,140);

	--color-scrollbar: rgb(150,150,150);
	--color-scrollbar-hover: rgb(160,160,160);

	--color-check-indicator: rgb(130,160,230);

	--box-shadow: 0 0.375rem 1.25rem 0 rgb(150,150,150);
	--box-shadow-focus: 0 0.375rem 1.25rem 0 rgb(150,150,150),
		0 0 0 0.125rem rgb(130,160,230);

	--border-radius: 0.375rem;
	--padding: 0.5rem;
	--width-scrollbar: 0.25rem;
	--size-check-indicator: 0.5rem;

	position: relative;
	height: ${({height}) => pxToRem(height)}rem;

	background-color: var(--color-background);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	font-family: 'Open Sans', sans-serif;

	display: flex;

	color: var(--color-text);

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

	&[aria-disabled='true']{
		background-color: var(--color-background-disabled);
		pointer-events: none;
	}
`;

export default {ComboBox, Input, Button, Dropdown, Option};