import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

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
		box-shadow: var(--shadow-dark);
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
		box-shadow: var(--shadow-dark), var(--shadow-focus);
	}

	&:not(:disabled){
		cursor: pointer;

		&:hover {
			&::before {
				box-shadow: var(--shadow-light);
				background-color: var(--color-background-light);
			}
		}

		&:active {
			&::before {
				transform: translateY(-45%);
				box-shadow: var(--shadow-light-pressed);
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
}))(({theme}) => {
	const {fontFamily, background, accent, content, size, radius, shadow, light, focus} = Object.keys(theme).length == 0 ? themeDefault : theme;

	return css`
		--size: ${size[3]};
		--padding: ${size[1]};

		--color-background: ${background[8]};
		--color-background-light: ${background[9]};
		--color-background-disabled: ${background[4]};

		--color-content: ${content[3]};
		--color-accent: ${accent[7]};
		--color-accent-light: ${accent[9]};

		--shadow-dark: ${shadow[0]};
		--shadow-light: ${light[1]};
		--shadow-light-pressed: ${light[0]};
		--shadow-focus: ${focus};

		font-family: ${fontFamily};
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
});

export default {RadioGroup, RadioGroupOption, RadioButton};