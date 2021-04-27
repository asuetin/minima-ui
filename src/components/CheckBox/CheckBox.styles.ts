import styled from 'styled-components';

import {size, radius, getShadow, focus} from 'utils/styleVars';

import theme from 'utils/theme';
const {background, accent, content} = theme;

const CheckBox = styled.input`
	--size: ${size.M};
	--border-radius: ${radius.M};
	--padding: ${size.XXS};
	--checkmark-thickness: calc(${size.XXS} / 1.25);

	--color-background: ${background.M};
	--color-background-light: ${background.L};
	--color-background-disabled: ${background.XXD};
	--color-handle: ${background.XXD};
	--color-handle-light: ${background.XD};

	--color-content: ${content.M};
	--color-accent: ${accent.M};
	--color-accent-light: ${accent.L};

	--shadow: ${getShadow('M')};
	--light: ${getShadow('L', accent.L)};
	--light-pressed: ${getShadow('M', accent.L)};
	--focus: ${focus};

	position: relative;
	width: var(--size);
	height: var(--size);

	cursor: pointer;
	visibility: hidden;

	margin: 0;

	&::before {
		content: '';
		visibility: visible;
		width: 100%;
		height: 100%;

		background-color: var(--color-background);
		box-shadow: var(--shadow);
		border-radius: var(--border-radius);
		transition: ${['background-color', 'box-shadow', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};

		display: block;
	}

	&::after {
		position: absolute;
		content: '';
		visibility: visible;
		width: 30%;
		height: 60%;
		top: 8%;
		left: 30%;
		transform: rotate(45deg);

		border: var(--checkmark-thickness) solid transparent;
		border-top: none;
		border-left: none;
		border-radius: calc(var(--checkmark-thickness) / 2);

		transition: ${['border-color', 'top'].map(v => `${v} 125ms ease-in-out`).join()};
	}

	&:focus::before {
		box-shadow: var(--shadow), var(--focus);
	}

	&:hover {
		&::before {
			box-shadow: var(--light);
			background-color: var(--color-background-light);
		}
	}

	&:active {
		&::before {
			transform: translateY(5%);
			box-shadow: var(--light-pressed);
		}

		&::after {
			top: 12%;
		}
	}

	&:checked::after {
		border-color: var(--color-content);
	}

	&:checked:hover::after {
		border-color: var(--color-accent-light);
	}

	&:disabled::before {
		background-color: var(--color-background-disabled);
	}

	&:disabled, &[aria-readonly='true'] {
		pointer-events: none;
	}
`;

export default {CheckBox};