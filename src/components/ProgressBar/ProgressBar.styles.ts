import styled from 'styled-components';

import {size, radius, getShadow} from 'utils/styleVars';

import theme from 'utils/theme';
const {background, accent, content} = theme;

const ProgressBar = styled.div<{percentage: number}>(({percentage}) => `
	--size: ${size.M};
	--border-radius: ${radius.M};

	--color-background: ${background.M};

	--color-accent: ${accent.M};

	--color-content: ${content.M};

	--shadow: ${getShadow('M')};

	position: relative;
	width: 20rem;
	height: var(--size);

	font-family: 'Open Sans', sans-serif;
	color: var(--color-content);
	background-color: var(--color-background);
	box-shadow: var(--shadow);
	border-radius: var(--border-radius);

	display: flex;
	align-items: center;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: ${percentage*100}%;
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
		clip-path: inset(0 ${(1-percentage)*100}% 0 0);
		color: white;
		transition: clip-path 125ms ease-in-out;
	}
`);

export default {ProgressBar};