import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const ProgressBar = styled.div.attrs<{percentage: number}>(({percentage}) => ({
	style: {
		'--percentage': percentage*100
	}
}))<{percentage: number}>(({theme}) => {
	const {fontFamily, background, accent, content, size, radius, shadow} = theme.minima ?? themeDefault;

	return css`
		--size: ${size[3]};
		--border-radius: ${radius[2]};

		--color-background: ${background[8]};

		--color-accent: ${accent[7]};

		--color-content: ${content[3]};
		--color-content-invert: ${background[9]};

		--shadow-dark: ${shadow[0]};

		position: relative;
		width: calc(var(--size) * 3);
		height: var(--size);

		font-family: ${fontFamily};
		color: var(--color-content);
		background-color: var(--color-background);
		box-shadow: var(--shadow-dark);
		border-radius: var(--border-radius);

		display: flex;
		align-items: center;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: calc(var(--percentage) * 1%);
			height: 100%;

			border-radius: var(--border-radius);
			background-color: var(--color-accent);
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
			color: var(--color-content-invert);
			transition: clip-path 125ms ease-in-out;
		}
	`;
});

export default {ProgressBar};