import styled from 'styled-components';

import {size, radius, getShadow, focus} from 'utils/styleVars';

import theme from 'utils/theme';
const {background, accent, content} = theme;

const Button = styled.button`
	--size: ${size.M};
	--border-radius: ${radius.M};
	--padding: ${size.XS};

	--color-background: ${background.M};
	--color-background-light: ${background.L};
	--color-background-disabled: ${background.XXD};

	--color-content: ${content.M};
	--color-accent: ${accent.M};
	--color-accent-light: ${accent.L};

	--shadow: ${getShadow('M')};
	--light: ${getShadow('L', accent.L)};
	--light-pressed: ${getShadow('M', accent.L)};
	--focus: ${focus};

	position: relative;
	height: var(--size);

	cursor: pointer;
	background-color: var(--color-background);
	box-shadow: var(--shadow);
	border: none;
	border-radius: var(--border-radius);
	outline: none;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	color: var(--color-content);
	transition: ${['background-color', 'box-shadow', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};

	display: flex;
	align-items: center;
	padding: var(--padding);

	> * {
		padding-right: var(--padding);
	}

	>:last-child {
		padding-right: 0;
	}

	> span {
		transition: color 125ms ease-in-out;
	}

	svg {
		stroke: var(--color-content);
		fill: var(--color-content);
	}

	&:focus {
		box-shadow: var(--shadow), var(--focus);
	}

	&:hover {
		box-shadow: var(--light);
		background-color: var(--color-background-light);

		> span {
			color: var(--color-accent-light);
		}

		svg {
			stroke: var(--color-accent-light);
			fill: var(--color-accent-light);
		}
	}

	&:active {
		box-shadow: var(--light-pressed);
		transform: translateY(5%);
	}

	&:disabled {
		background-color: var(--color-background-disabled);
		pointer-events: none;
	}
`;

export default {Button};