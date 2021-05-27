import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const TextInput = styled.input(({theme}) => {
	const {fontFamily, background, content, size, radius, border, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		height: ${size[3]};

		background-color: ${background[8]};

		font-family: ${fontFamily};
		text-overflow: ellipsis;
		white-space: nowrap;
		color: ${content[3]};

		outline: none;
		border: ${border[0]};
		border-radius: ${radius[2]};
		box-shadow: ${shadow[0]};

		transition: ${['background-color', 'color', 'box-shadow', 'border'].map(v => `${v} 125ms ease-in-out`).join()};

		padding: 0 ${size[1]} 0 ${size[1]};
		overflow: hidden;
		box-sizing: border-box;

		&[aria-multiline='true']{
			padding: ${size[1]};
		}

		&::placeholder {
			color: ${content[9]};
		}

		@media (hover: hover) and (pointer: fine) {
			&:hover {
				background-color: ${background[9]};

				border: ${border[1]};
				box-shadow: ${light[1]};
			}
		}

		&:focus-visible {
			background-color: ${background[9]};

			border: ${border[1]};
			box-shadow: ${light[1]}, ${focus};
		}

		&:disabled {
			background-color: ${background[4]};
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
			background-color: ${content[8]};
			border-radius: ${radius[2]};
		}

		@media (hover: hover) and (pointer: fine) {
			::-webkit-scrollbar-thumb:hover {
				background-color: ${content[9]};
			}
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