import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const Button = styled.button(({theme}) => {
	const {fontFamily, background, accent, content, size, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		--size: ${size[3]};
		--border-radius: ${radius[2]};
		--padding: ${size[1]};

		--color-background: ${background[8]};
		--color-background-light: ${background[9]};
		--color-background-disabled: ${background[4]};

		--color-content: ${content[0]};
		--color-accent: ${accent[7]};
		--color-accent-light: ${accent[9]};

		--shadow-dark: ${shadow[0]};
		--shadow-light: ${light[1]};
		--shadow-light-pressed: ${light[0]};
		--shadow-focus: ${focus};

		position: relative;
		height: var(--size);

		cursor: pointer;
		background-color: var(--color-background);
		box-shadow: var(--shadow-dark);
		border: none;
		border-radius: var(--border-radius);
		outline: none;
		font-family: ${fontFamily};
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
			box-shadow: var(--shadow-dark), var(--shadow-focus);
		}

		&:hover {
			box-shadow: var(--shadow-light);
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
			box-shadow: var(--shadow-light-pressed);
			transform: translateY(5%);
		}

		&:disabled {
			background-color: var(--color-background-disabled);
			pointer-events: none;
		}
	`;
});

export default {Button};