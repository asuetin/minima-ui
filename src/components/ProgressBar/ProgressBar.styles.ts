import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const ProgressBar = styled.div.attrs<{percentage: number}>(({percentage}) => ({
	style: {
		'--percentage': percentage*100
	}
}))<{percentage: number}>(({theme}) => {
	const {fontFamily, background, accent, content, size, radius, border, shadow} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		width: calc(${size[3]} * 3);
		height: ${size[3]};

		background-color: ${background[8]};

		border: ${border[0]};
		border-radius: ${radius[2]};
		box-shadow: ${shadow[0]};

		font-family: ${fontFamily};
		color: ${content[3]};

		display: flex;
		align-items: center;
		box-sizing: border-box;
		overflow: hidden;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: calc(var(--percentage) * 1%);
			height: 100%;

			background-color: ${accent[7]};

			border-radius: 0 ${radius[2]} ${radius[2]} 0;

			transition: width 125ms ease-in-out;
		}

		span {
			position: absolute;
			width: 100%;
			z-index: 1;

			text-align: center;
		}

		span:last-child {
			clip-path: inset(0 calc((100 - var(--percentage)) * 1%) 0 0);
			color: ${background[9]};
			mix-blend-mode: color-dodge;

			transition: clip-path 125ms ease-in-out;
		}
	`;
});

export default {ProgressBar};