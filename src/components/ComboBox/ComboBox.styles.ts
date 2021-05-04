import styled, {css, keyframes} from 'styled-components';

import {pxToRem} from 'utils/functions';

import themeDefault from 'utils/theme';

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
			background-color: var(--color-accent);

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
`);

const Button = styled.button`
	position: relative;

	cursor: pointer;
	background-color: inherit;
	border: none;
	border-radius: inherit;
	outline: none;

	display: flex;
	align-items: center;
	padding: 0 var(--padding) 0 var(--padding);

	> * {
		transition: ${['stroke', 'fill', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};
	}
`;

const Input = styled.input`
	position: relative;
	flex-grow: 1;
	padding: 0 0 0 var(--padding);

	color: var(--color-content);
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
		color: var(--color-placeholder);
	}
`;

const ComboBox = styled.div<{height: number}>(({theme, height}) => {
	const {fontFamily, background, accent, content, size, radius, shadow, light, focus} = Object.keys(theme).length == 0 ? themeDefault : theme;

	return css`
		--border-radius: ${radius[2]};
		--padding: ${size[1]};
		--width-scrollbar: ${size[0]};
		--size-check-indicator: ${size[1]};

		--color-background: ${background[8]};
		--color-background-light: ${background[9]};
		--color-background-disabled: ${background[4]};
		--color-dropdown-background: ${background[8]};
		--color-option-background-hover: ${background[7]};
		--color-option-background-selected: ${background[6]};

		--color-content: ${content[3]};
		--color-placeholder: ${content[9]};
		--color-accent: ${accent[7]};
		--color-accent-light: ${accent[9]};

		--color-scrollbar: ${content[8]};
		--color-scrollbar-hover: ${content[9]};

		--shadow-dark: ${shadow[0]};
		--shadow-light: ${light[1]};
		--shadow-focus: ${focus};

		position: relative;
		height: ${pxToRem(height)}rem;

		background-color: var(--color-background);
		outline: none;
		box-shadow: var(--shadow-dark);
		border-radius: var(--border-radius);
		font-family: ${fontFamily};
		color: var(--color-content);
		transition: ${['background-color', 'box-shadow', 'border-radius'].map(v => `${v} 125ms ease-in-out`).join()};

		display: flex;

		svg {
			stroke: var(--color-content);
			fill: var(--color-content);
		}

		&[aria-expanded='true'], &:hover, ${Dropdown}{
			box-shadow: var(--shadow-light);
		}

		&[aria-expanded='true'], &:hover {
			background-color: var(--color-background-light);
		}

		&[aria-expanded='false']{
			&:focus {
				box-shadow: var(--shadow-dark), var(--shadow-focus);
			}

			&:hover {
				${Input}{
					color: var(--color-accent-light);
				}

				svg {
					stroke: var(--color-accent-light);
					fill: var(--color-accent-light);
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
					stroke: var(--color-accent-light);
					fill: var(--color-accent-light);
				}
			}
		}

		&[aria-disabled='true']{
			background-color: var(--color-background-disabled);
			pointer-events: none;
		}
	`;
});

export default {ComboBox, Input, Button, Dropdown, Option};