import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const CheckBox = styled.input.attrs({type: 'checkbox'})(({theme}) => {
	const {background, accent, content, size, radius, border, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		width: ${size[3]};
		height: 0;
		margin: ${size[2]} 0 ${size[2]} 0;

		cursor: pointer;

		outline: none;

		&::before {
			content: '';
			width: ${size[3]};
			height: ${size[3]};
			transform: translateY(-50%);

			background-color: ${background[8]};

			border: ${border[0]};
			border-radius: ${radius[2]};
			box-shadow: ${shadow[0]};

			transition: ${['background-color', 'box-shadow', 'transform', 'border'].map(v => `${v} 125ms ease-in-out`).join()};

			display: block;
			box-sizing: border-box;
		}

		&::after {
			position: absolute;
			content: '';
			width: calc(${size[3]} * 0.3);
			height: calc(${size[3]} * 0.6);
			top: 0;
			left: calc(${size[3]} * 0.3);
			transform: translateY(-58%) rotate(45deg);

			border: calc(${size[0]} / 1.25) solid transparent;
			border-top: none;
			border-left: none;
			border-radius: calc(${size[0]} / 2.5);

			transition: ${['border-color', 'top'].map(v => `${v} 125ms ease-in-out`).join()};
		}

		&:focus-visible::before {
			box-shadow: ${shadow[0]}, ${focus};
		}

		&:not([aria-readonly='true']):not(:disabled){
			@media (hover: hover) and (pointer: fine) {
				&:hover {
					&::before {
						background-color: ${background[9]};

						border: ${border[1]};
						box-shadow: ${light[1]};
					}

					&:checked::after {
						border-color: ${accent[9]};
					}
				}
			}

			&:active {
				&::before {
					transform: translateY(-45%);

					border: ${border[2]};
					box-shadow: ${light[0]};
				}

				&::after {
					top: calc(${size[3]} * 0.05);
				}
			}
		}

		&:checked::after {
			border-color: ${content[3]};
		}

		&:disabled::before {
			background-color: ${background[4]};
		}

		&:disabled, &[aria-readonly='true'] {
			pointer-events: none;
		}
	`;
});

export default {CheckBox};