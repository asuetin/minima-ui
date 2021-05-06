import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const Switch = styled.button(({theme}) => {
	const {background, accent, size, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		width: calc(${size[3]} * 1.75);
		height: ${size[3]};

		cursor: pointer;
		background-color: ${background[8]};
		box-shadow: ${shadow[0]};
		border: none;
		border-radius: ${radius[2]};
		outline: none;
		transition: ${['background-color', 'box-shadow', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};

		display: flex;

		&::after {
			content: '';
			position: absolute;
			left: ${size[0]};
			top: ${size[0]};
			width: 30%;
			height: calc(100% - ${size[1]});

			border-radius: ${radius[2]};
			background-color: ${background[4]};
			transition: left 125ms ease-in-out;
		}

		&:focus {
			box-shadow: ${shadow[0]}, ${focus};
		}

		&:hover {
			box-shadow: ${light[1]};
			background-color: ${background[9]};

			&::after {
				background-color: ${background[6]};
			}
		}

		&:active {
			box-shadow: ${light[0]};
			transform: translateY(5%);
		}

		&[aria-checked='true']{
			background-color: ${accent[7]};

			&::after {
				left: calc(70% - ${size[0]});
				background-color: ${background[8]};
			}

			&:hover {
				background-color: ${accent[9]};

				&::after {
					background-color: ${background[9]};
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