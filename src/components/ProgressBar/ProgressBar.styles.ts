import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const ProgressBar = styled.div.attrs<{percentage: number}>(({percentage}) => ({
	style: {
		'--percentage': percentage*100
	}
}))<{percentage: number}>(({theme}) => {
	const {fontFamily, background, accent, content, size, radius, shadow} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		width: calc(${size[3]} * 3);
		height: ${size[3]};

		font-family: ${fontFamily};
		color: ${content[3]};
		background-color: ${background[8]};
		box-shadow: ${shadow[0]};
		border-radius: ${radius[2]};

		display: flex;
		align-items: center;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: calc(var(--percentage) * 1%);
			height: 100%;

			border-radius: ${radius[2]};
			background-color: ${accent[7]};
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
			transition: clip-path 125ms ease-in-out;
		}
	`;
});

export default {ProgressBar};