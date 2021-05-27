import styled, {css, keyframes} from 'styled-components';

import {pxToRem} from 'utils/functions';

import themeDefault from 'utils/theme';

import List from 'components/List';
import Button from 'components/Button';
import TextInput from 'components/TextInput';

const Option = styled.li(({theme}) => {
	const {background, accent, size} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		white-space: nowrap;
		text-overflow: ellipsis;

		transition: padding-left 125ms ease-in-out;

		display: block;
		padding: 0;
		padding-left: ${size[1]};
		overflow: hidden;

		&[role='option']{
			cursor: pointer;
		}

		@media (hover: hover) and (pointer: fine) {
			&[role='option']:hover {
				background-color: ${background[7]};
			}
		}

		&:not([role='option']){
			transform: translateY(20%);

			font-size: 80%;
			font-weight: bold;
			text-align: center;
		}

		&[aria-selected='true']{
			background-color: ${background[6]};
		}

		&[aria-checked='true']{
			padding-left: calc(${size[1]} * 3);

			animation: ${keyframes`
				0% {
					padding-left: ${size[1]};
				}
				100% {
					padding-left: calc(${size[1]} * 3);
				}
			`} 125ms ease-in-out;

			&::before {
				position: absolute;
				content: '';
				top: calc(50% - ${size[0]});
				left: ${size[1]};
				width: ${size[1]};
				height: ${size[1]};

				background-color: ${accent[7]};

				border-radius: 50%;

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
});

const Dropdown = styled(List).attrs({role: 'listbox'})<{visibleOptionCount: number}>(({theme, rowHeight, rowCount, visibleOptionCount}) => {
	const {background, content, size, radius, border, light} = theme.minima ?? themeDefault;

	const borderWidth = border[0] == 'none' ? '0rem' : border[0].split(' ')[0];

	return css`
		--height: ${pxToRem(rowHeight*Math.min(visibleOptionCount, rowCount || 1))}rem;

		position: absolute;
		width: 100%;
		left: -${borderWidth};
		top: 100%;
		height: var(--height);

		background-color: ${background[8]};

		border: ${border[0]};
		border-radius: ${radius[2]};
		border-top: none;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		box-shadow: ${light[1]};

		animation: ${keyframes`
			0% {
				height: 0;
			}
			100% {
				height: var(--height);
			}
		`} 125ms ease-in-out;

		> * {
			line-height: ${pxToRem(rowHeight)}rem;
		}

		::-webkit-scrollbar {
			width: ${size[0]};
		}

		::-webkit-scrollbar-button {
			display: none;
		}

		::-webkit-scrollbar-thumb {
			background-color: ${content[8]};

			border-radius: ${radius[2]};
		}

		@media (hover: hover) and (pointer: fine) {
			::-webkit-scrollbar-thumb:hover {
				background-color: ${content[9]};
			}
		}

		::-webkit-scrollbar-track,
		::-webkit-scrollbar-track-piece,
		::-webkit-resizer,
		::-webkit-scrollbar-corner {
			display: none;
		}
	`;
});

const ChevronButton = styled(Button)(({theme}) => {
	const {size} = theme.minima ?? themeDefault;

	return css`
		position: absolute;
		width: ${size[3]};
		right: 0;

		&& {
			background-color: transparent;

			border: none;
			box-shadow: none;

			transform: none;
		}
	`;
});

const Input = styled(TextInput)(({theme}) => {
	const {size} = theme.minima ?? themeDefault;

	return css`
		height: 100%;

		background-color: inherit;

		border-radius: inherit;

		&& {
			border: none;
			box-shadow: none;
		}

		font: inherit;

		padding: 0 ${size[3]} 0 ${size[1]};
	`;
});

const ComboBox = styled.div<{height: number}>(({theme, height}) => {
	const {fontFamily, background, accent, content, radius, border, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		height: ${pxToRem(height)}rem;

		background-color: ${background[8]};

		outline: none;
		border: ${border[0]};
		border-radius: ${radius[2]};
		box-shadow: ${shadow[0]};

		font-family: ${fontFamily};
		color: ${content[3]};

		transition: ${['background-color', 'box-shadow', 'border-radius', 'border'].map(v => `${v} 125ms ease-in-out`).join()};

		display: flex;
		box-sizing: border-box;

		@media (hover: hover) and (pointer: fine) {
			&:hover {
				background-color: ${background[9]};

				border: ${border[1]};
				box-shadow: ${light[1]};
			}
		}

		&[aria-expanded='false']{
			&:focus-visible {
				box-shadow: ${shadow[0]}, ${focus};
			}

			@media (hover: hover) and (pointer: fine) {
				&:hover {
					${Input}{
						color: ${accent[9]};
					}

					svg {
						stroke: ${accent[9]};
						fill: ${accent[9]};
					}
				}
			}
		}

		&[aria-expanded='true']{
			background-color: ${background[9]};

			border: ${border[2]};
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			box-shadow: ${light[1]};

			${Input}{
				box-shadow: ${focus};
			}

			${Dropdown}{
				border: ${border[2]};
				border-top: 0;
			}

			${ChevronButton}{
				>:first-child {
					transform: rotate(180deg);
				}
			}
		}

		&[aria-disabled='true']{
			background-color: ${background[4]};
			pointer-events: none;
		}
	`;
});

export default {ComboBox, Input, ChevronButton, Dropdown, Option};