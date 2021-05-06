import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const RadioButton = styled.input.attrs(() => ({
	type: 'radio'
}))(({theme}) => {
	const {size, background, accent, content, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		width: ${size[3]};
		height: 0;

		outline: none;

		margin: ${size[2]} 0 ${size[2]} 0;

		&::before {
			content: '';
			width: ${size[3]};
			height: ${size[3]};
			transform: translateY(-50%);

			background-color: ${background[8]};

			border-radius: 50%;
			box-shadow: ${shadow[0]};

			transition: ${['background-color', 'box-shadow', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};

			display: block;
		}

		&::after {
			position: absolute;
			content: '';
			width: calc(${size[3]} * 0.5);
			height: calc(${size[3]} * 0.5);
			top: 0;
			left: calc(${size[3]} * 0.25);
			transform: translateY(-50%);

			background-color: transparent;

			border-radius: 50%;

			transition: ${['background-color', 'top'].map(v => `${v} 125ms ease-in-out`).join()};
		}

		&:focus-visible::before {
			box-shadow: ${shadow[0]}, ${focus};
		}

		&:not(:disabled){
			cursor: pointer;

			@media (hover: hover) and (pointer: fine) {
				&:hover {
					&::before {
						background-color: ${background[9]};

						box-shadow: ${light[1]};
					}

					&:checked::after {
						background-color: ${accent[9]};
					}
				}
			}

			&:active {
				&::before {
					transform: translateY(-45%);

					box-shadow: ${light[0]};
				}

				&::after {
					top: calc(${size[3]} * 0.05);
				}
			}
		}

		&:checked::after {
			background-color: ${content[3]};
		}

		&:disabled::before {
			background-color: ${background[4]};
		}
	`;
});

const RadioGroupOption = styled.li.attrs(() => ({
	role: 'radio'
}))(({theme}) => {
	const {size} = theme.minima ?? themeDefault;

	return css`
		display: grid;
		grid-template-columns: min-content 1fr;
		align-items: center;

		>:last-child {
			line-height: ${size[3]};
			padding-left: ${size[1]};
		}
	`;
});

const RadioGroup = styled.ul.attrs(() => ({
	role: 'radiogroup' as string
}))(({theme}) => {
	const {fontFamily, content, size} = theme.minima ?? themeDefault;

	return css`
		margin: 0;

		font-family: ${fontFamily};
		color: ${content[3]};

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		grid-gap: ${size[2]};
		padding: 0;

		&:disabled {
			pointer-events: none;
		}
	`;
});

export default {RadioGroup, RadioGroupOption, RadioButton};