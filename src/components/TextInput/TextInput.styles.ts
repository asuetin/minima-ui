import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const TextInput = styled.input(({theme}) => {
	const {fontFamily, background, accent, content, size, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		--size: ${size[3]};
		--border-radius: ${radius[2]};
		--padding: ${size[1]};
		--checkmark-thickness: calc(${size[0]} / 1.25);

		--color-background: ${background[8]};
		--color-background-light: ${background[9]};
		--color-background-disabled: ${background[4]};

		--color-content: ${content[3]};
		--color-placeholder: ${content[9]};
		--color-accent: ${accent[7]};
		--color-accent-light: ${accent[9]};

		--color-scrollbar: ${content[8]};
		--color-scrollbar-hover: ${content[9]};

		--shadow-dark: ${shadow[0]};
		--shadow-light: ${light[1]};
		--shadow-light-active: ${light[0]};
		--shadow-focus: ${focus};

		position: relative;
		height: var(--size);

		font-family: ${fontFamily};
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: var(--color-content);
		background-color: var(--color-background);
		box-shadow: var(--shadow-dark);
		outline: none;
		border: none;
		border-radius: var(--border-radius);
		transition: ${['background-color', 'box-shadow'].map(v => `${v} 125ms ease-in-out`).join()};

		padding: 0 var(--padding) 0 var(--padding);

		&[aria-multiline='true']{
			padding: var(--padding);
		}

		&::placeholder {
			color: var(--color-placeholder);
		}

		&:focus, &:hover {
			box-shadow: var(--shadow-light);
			background-color: var(--color-background-light);
		}

		&:disabled {
			background-color: var(--color-background-disabled);
		}

		&:disabled, &:read-only {
			pointer-events: none;
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
	`;
});

export default {TextInput};