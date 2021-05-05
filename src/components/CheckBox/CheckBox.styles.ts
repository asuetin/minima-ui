import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const CheckBox = styled.input.attrs(() => ({
	type: 'checkbox'
}))(({theme}) => {
	const {background, accent, content, size, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		--size: ${size[3]};
		--border-radius: ${radius[2]};
		--padding: ${size[0]};
		--checkmark-thickness: calc(${size[0]} / 1.25);

		--color-background: ${background[8]};
		--color-background-light: ${background[9]};
		--color-background-disabled: ${background[4]};

		--color-content: ${content[3]};
		--color-accent: ${accent[7]};
		--color-accent-light: ${accent[9]};

		--shadow-dark: ${shadow[0]};
		--shadow-light: ${light[1]};
		--shadow-light-active: ${light[0]};
		--shadow-focus: ${focus};

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
			box-shadow: var(--shadow-dark);
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
			box-shadow: var(--shadow-dark), var(--shadow-focus);
		}

		&:not([aria-readonly='true']):not(:disabled){
			&:hover {
				&::before {
					box-shadow: var(--shadow-light);
					background-color: var(--color-background-light);
				}
			}

			&:active {
				&::before {
					transform: translateY(-45%);
					box-shadow: var(--shadow-light-active);
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
});

export default {CheckBox};