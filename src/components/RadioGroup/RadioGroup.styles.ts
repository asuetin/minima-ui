import styled from 'styled-components';

import {size, getShadow, focus} from 'utils/styleVars';

import theme from 'utils/theme';
const {background, accent, content} = theme;

const RadioButton = styled.input.attrs(() => ({
	type: 'radio'
}))`
	position: relative;
	width: var(--size);
	height: 0;

	outline: none;

	margin: calc(var(--size) / 2) 0 calc(var(--size) / 2) 0;

	&::before {
		content: '';
		width: var(--size);
		height: var(--size);
		transform: translateY(-50%);

		background-color: var(--color-background);
		box-shadow: var(--shadow);
		border-radius: 50%;
		transition: ${['background-color', 'box-shadow', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};

		display: block;
	}

	&::after {
		position: absolute;
		content: '';
		width: calc(var(--size) * 0.5);
		height: calc(var(--size) * 0.5);
		top: 0;
		left: calc(var(--size) * 0.25);
		transform: translateY(-50%);

		background-color: transparent;
		border-radius: 50%;

		transition: ${['background-color', 'top'].map(v => `${v} 125ms ease-in-out`).join()};
	}

	&:focus::before {
		box-shadow: var(--shadow), var(--focus);
	}

	&:not(:disabled){
		cursor: pointer;

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
			background-color: var(--color-accent-light);
		}
	}

	&:checked::after {
		background-color: var(--color-content);
	}

	&:disabled::before {
		background-color: var(--color-background-disabled);
	}
`;

const RadioGroupOption = styled.li.attrs(() => ({
	role: 'radio'
}))`
	display: grid;
	grid-template-columns: min-content 1fr;
	align-items: center;

	>:last-child {
		line-height: var(--size);
		padding-left: var(--padding);
	}
`;

const RadioGroup = styled.ul.attrs(() => ({
	role: 'radiogroup' as string
}))`
	--size: ${size.M};
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

	font-family: 'Open Sans', sans-serif;
	color: var(--color-content);

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
	grid-gap: calc(var(--padding) * 2);
	padding: 0;
	margin: 0;

	&:disabled {
		pointer-events: none;
	}
`;

export default {RadioGroup, RadioGroupOption, RadioButton};