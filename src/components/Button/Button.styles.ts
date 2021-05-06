import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const Button = styled.button(({theme}) => {
	const {fontFamily, background, accent, content, size, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		height: ${size[3]};
		box-sizing: border-box;

		cursor: pointer;
		background-color: ${background[8]};
		box-shadow: ${shadow[0]};
		border: none;
		border-radius: ${radius[2]};
		outline: none;
		font-size: 0.8rem;
		font-family: ${fontFamily};
		font-weight: bold;
		color: ${content[0]};
		text-decoration: none;
		transition: ${['background-color', 'box-shadow', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};

		display: flex;
		align-items: center;
		padding: ${size[1]};

		> * {
			padding-right: ${size[1]};
		}

		>:last-child {
			padding-right: 0;
		}

		> span {
			transition: color 125ms ease-in-out;
		}

		svg {
			stroke: ${content[0]};
			fill: ${content[0]};
		}

		&:focus {
			box-shadow: ${shadow[0]}, ${focus};
		}

		&:hover {
			box-shadow: ${light[1]};
			background-color: ${background[9]};

			> span {
				color: ${accent[9]};
			}

			svg {
				stroke: ${accent[9]};
				fill: ${accent[9]};
			}
		}

		&:active {
			box-shadow: ${light[0]};
			transform: translateY(5%);
		}

		&:disabled {
			background-color: ${background[4]};
			pointer-events: none;
		}
	`;
});

export default {Button};