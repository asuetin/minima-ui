import styled from 'styled-components';

import {size, radius, getShadow, focus} from 'utils/styleVars';

import theme from 'utils/theme';
const {background, accent, content} = theme;

const CheckBox = styled.input.attrs(() => ({
	type: 'checkbox'
}))`
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
	height: 0;

	cursor: pointer;
	outline: none;

	margin: calc(var(--size) / 2) 0 calc(var(--size) / 2) 0;

	&::before {
		content: '';
		width: var(--size);
		height: var(--size);
		transform: translateY(-50%);

		background-color: var(--color-background);
		box-shadow: var(--shadow);
		border-radius: var(--border-radius);
		transition: ${['background-color', 'box-shadow', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};

		display: block;
	}

	&::after {
		position: absolute;
		content: '';
		width: calc(var(--size) * 0.3);
		height: calc(var(--size) * 0.6);
		top: 0;
		left: calc(var(--size) * 0.3);
		transform: translateY(-58%) rotate(45deg);

		border: var(--checkmark-thickness) solid transparent;
		border-top: none;
		border-left: none;
		border-radius: calc(var(--checkmark-thickness) / 2);

		transition: ${['border-color', 'top'].map(v => `${v} 125ms ease-in-out`).join()};
	}

	&:focus::before {
		box-shadow: var(--shadow), var(--focus);
	}

	&:not([aria-readonly='true']):not(:disabled){
		&:hover {
			&::before {
				box-shadow: var(--light);
				background-color: var(--color-background-light);
			}
		}

		&:active {
			&::before {
				transform: translateY(-45%);
				box-shadow: var(--light-pressed);
			}

			&::after {
				top: calc(var(--size) * 0.05);
			}
		}

		&:checked:hover::after {
			border-color: var(--color-accent-light);
		}
	}

	&:checked::after {
		border-color: var(--color-content);
	}

	&:disabled::before {
		background-color: var(--color-background-disabled);
	}

	&:disabled, &[aria-readonly='true'] {
		pointer-events: none;
	}
`;

export default {CheckBox};