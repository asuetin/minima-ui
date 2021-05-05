import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const Switch = styled.button(({theme}) => {
	const {background, accent, size, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		--size: ${size[3]};
		--border-radius: ${radius[2]};
		--padding: ${size[0]};

		--color-background: ${background[8]};
		--color-background-light: ${background[9]};
		--color-background-disabled: ${background[4]};
		--color-thumb: ${background[4]};
		--color-thumb-light: ${background[6]};

		--color-accent: ${accent[7]};
		--color-accent-light: ${accent[9]};

		--shadow-dark: ${shadow[0]};
		--shadow-light: ${light[1]};
		--shadow-light-active: ${light[0]};
		--shadow-focus: ${focus};

		position: relative;
		width: calc(var(--size) * 1.75);
		height: var(--size);

		cursor: pointer;
		background-color: var(--color-background);
		box-shadow: var(--shadow-dark);
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
			background-color: var(--color-thumb);
			transition: left 125ms ease-in-out;
		}

		&:focus {
			box-shadow: var(--shadow-dark), var(--shadow-focus);
		}

		&:hover {
			box-shadow: var(--shadow-light);
			background-color: var(--color-background-light);

			&::after {
				background-color: var(--color-thumb-light);
			}
		}

		&:active {
			box-shadow: var(--shadow-light-active);
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

		&:disabled {
			background-color: var(--color-background-disabled);

			&::after {
				background-color: var(--color-thumb-light);
			}
		}

		&:disabled, &[aria-readonly='true'] {
			pointer-events: none;
		}
	`;
});

export default {Switch};