import styled, {css, keyframes} from 'styled-components';

import {pxToRem} from 'utils/functions';

import themeDefault from 'utils/theme';

import List from 'components/List';

const Option = styled.li(({theme}) => {
	const {background, accent, size} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;

		display: block;
		padding: 0;
		padding-left: ${size[1]};
		transition: padding-left 125ms ease-in-out;

		&[role='option']{
			cursor: pointer;
		}

		&[role='option']:hover {
			background-color: ${background[7]};
		}

		&:not([role='option']){
			font-size: 80%;
			font-weight: bold;
			text-align: center;
			transform: translateY(20%);
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
				top: calc(50% - ${size[1]} / 2);
				left: calc((${size[1]} + ${size[1]}) / 2);
				width: ${size[1]};
				height: ${size[1]};

				border-radius: 50%;
				background-color: ${accent[7]};

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

const Dropdown = styled(List)<{visibleOptionCount: number}>(({theme, rowHeight, rowCount, visibleOptionCount}) => {
	const {background, content, size, radius} = theme.minima ?? themeDefault;

	return css`
		--height: ${pxToRem(rowHeight*Math.min(visibleOptionCount, rowCount || 1))}rem;

		position: absolute;
		width: 100%;
		top: 100%;
		height: var(--height);

		background-color: ${background[8]};
		box-shadow: var(--box-shadow);
		border-radius: ${radius[2]};
		border-top-left-radius: 0;
		border-top-right-radius: 0;

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

		::-webkit-scrollbar-thumb:hover {
			background-color: ${content[9]};
		}

		::-webkit-scrollbar-track,
		::-webkit-scrollbar-track-piece,
		::-webkit-resizer,
		::-webkit-scrollbar-corner {
			display: none;
		}
	`;
});

const Button = styled.button(({theme}) => {
	const {size} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		cursor: pointer;
		background-color: inherit;
		border: none;
		border-radius: inherit;
		outline: none;

		display: flex;
		align-items: center;
		padding: 0 ${size[1]} 0 ${size[1]};

		> * {
			transition: ${['stroke', 'fill', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};
		}
	`;
});

const Input = styled.input(({theme}) => {
	const {content, size} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		flex-grow: 1;
		padding: 0 0 0 ${size[1]};

		color: ${content[3]};
		background-color: inherit;
		border: none;
		border-radius: inherit;
		outline: none;
		font: inherit;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		transition: color 125ms ease-in-out;

		display: flex;
		align-items: center;

		::placeholder {
			color: ${content[9]};
		}
	`;
});

const ComboBox = styled.div<{height: number}>(({theme, height}) => {
	const {fontFamily, background, accent, content, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		height: ${pxToRem(height)}rem;

		background-color: ${background[8]};
		outline: none;
		box-shadow: ${shadow[0]};
		border-radius: ${radius[2]};
		font-family: ${fontFamily};
		color: ${content[3]};
		transition: ${['background-color', 'box-shadow', 'border-radius'].map(v => `${v} 125ms ease-in-out`).join()};

		display: flex;

		svg {
			stroke: ${content[3]};
			fill: ${content[3]};
		}

		&[aria-expanded='true'], &:hover, ${Dropdown}{
			box-shadow: ${light[1]};
		}

		&[aria-expanded='true'], &:hover {
			background-color: ${background[9]};
		}

		&[aria-expanded='false']{
			&:focus {
				box-shadow: ${shadow[0]}, ${focus};
			}

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

		&[aria-expanded='true']{
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			${Button}{
				> * {
					transform: rotate(180deg);
				}

				&:hover svg {
					stroke: ${accent[9]};
					fill: ${accent[9]};
				}
			}
		}

		&[aria-disabled='true']{
			background-color: ${background[4]};
			pointer-events: none;
		}
	`;
});

export default {ComboBox, Input, Button, Dropdown, Option};