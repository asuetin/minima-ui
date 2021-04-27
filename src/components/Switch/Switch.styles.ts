import styled from 'styled-components';

import {size, radius, getShadow, focus} from 'utils/styleVars';

import theme from 'utils/theme';
const {background, accent, content} = theme;

const Switch = styled.button`
	--size: ${size.M};
	--border-radius: ${radius.M};
	--padding: ${size.XXS};

	--color-background: ${background.M};
	--color-background-light: ${background.L};
	--color-background-disabled: ${background.XXD};
	--color-handle: ${background.XXD};
	--color-handle-light: ${background.XD};

	--color-accent: ${accent.M};
	--color-accent-light: ${accent.L};

	--shadow: ${getShadow('M')};
	--light: ${getShadow('L', accent.L)};
	--light-pressed: ${getShadow('M', accent.L)};
	--focus: ${focus};

	position: relative;
	width: calc(var(--size) * 1.75);
	height: var(--size);

	cursor: pointer;
	background-color: var(--color-background);
	box-shadow: var(--shadow);
	border: none;
	border-radius: var(--border-radius);
	outline: none;
	transition: ${['background-color', 'box-shadow', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};

	display: flex;

	&::after {
		content: '';
		position: absolute;
		left: var(--padding);
		top: var(--padding);
		width: 30%;
		height: calc(100% - var(--padding) * 2);

		border-radius: var(--border-radius);
		background-color: var(--color-handle);
		transition: left 125ms ease-in-out;
	}

	&:focus {
		box-shadow: var(--shadow), var(--focus);
	}

	&:hover {
		box-shadow: var(--light);
		background-color: var(--color-background-light);

		&::after {
			background-color: var(--color-handle-light);
		}
	}

	&:active {
		box-shadow: var(--light-pressed);
		transform: translateY(5%);
	}

	&[aria-checked='true']{
		background-color: var(--color-accent);

		&::after {
			left: calc(70% - var(--padding));
			background-color: var(--color-background);
		}

		&:hover {
			background-color: var(--color-accent-light);

			&::after {
				background-color: var(--color-background-light);
			}
		}
	}

	&[aria-disabled='true']{
		background-color: var(--color-background-disabled);

		&::after {
			background-color: var(--color-handle-light);
		}
	}

	&[aria-readonly='true']{
		pointer-events: none;
	}
`;

export default {Switch};