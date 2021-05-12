import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const Switch = styled.button(({theme}) => {
	const {background, accent, size, radius, border, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		width: calc(${size[3]} * 1.75);
		height: ${size[3]};

		cursor: pointer;

		background-color: ${background[8]};

		border: ${border[0]};
		border-radius: ${radius[2]};
		outline: none;
		box-shadow: ${shadow[0]};

		transition: ${['background-color', 'box-shadow', 'transform', 'border'].map(v => `${v} 125ms ease-in-out`).join()};

		display: flex;
		box-sizing: border-box;

		&::after {
			content: '';
			position: absolute;
			left: ${size[0]};
			top: ${size[0]};
			width: 30%;
			height: calc(100% - ${size[1]});

			background-color: ${background[4]};

			border-radius: ${radius[2]};

			transition: left 125ms ease-in-out;
		}

		&:focus-visible {
			box-shadow: ${shadow[0]}, ${focus};
		}

		@media (hover: hover) and (pointer: fine) {
			&:hover {
				background-color: ${background[9]};

				border: ${border[1]};
				box-shadow: ${light[1]};

				&::after {
					background-color: ${background[6]};
				}
			}
		}

		&:active {
			transform: translateY(5%);

			border: ${border[2]};
			box-shadow: ${light[0]};
		}

		&[aria-checked='true']{
			background-color: ${accent[7]};

			&::after {
				left: calc(70% - ${size[0]});

				background-color: ${background[8]};
			}

			@media (hover: hover) and (pointer: fine) {
				&:hover {
					background-color: ${accent[9]};

					&::after {
						background-color: ${background[9]};
					}
				}
			}
		}

		&:disabled {
			background-color: ${background[4]};

			&::after {
				background-color: ${background[6]};
			}
		}

		&:disabled, &[aria-readonly='true'] {
			pointer-events: none;
		}
	`;
});

export default {Switch};