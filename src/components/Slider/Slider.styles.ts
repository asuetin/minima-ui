import styled, {css} from 'styled-components';

import {size, radius, getShadow, focus} from 'utils/styleVars';

import theme from 'utils/theme';
const {background, accent} = theme;

const Handle = styled.div.attrs<{left: number; width: number}>(({left, width}) => ({
	style: {
		left: `calc(${left*100}% - var(--thumb-size) / 2 - var(--padding))`,
		width: `calc(${width*100}% + var(--thumb-size) + var(--padding) * 2)`
	}
}))<{
	left: number;
	width: number;
}>`
	position: absolute;
	top: 0;
	height: 100%;

	cursor: grab;
	outline: none;
	border-radius: var(--border-radius);
	background-color: var(--color-accent);
	transition: ${['background-color', 'box-shadow'].map(v => `${v} 125ms ease-in-out`).join()};

	&:hover {
		box-shadow: var(--light);
	}

	&:focus {
		box-shadow: var(--focus);
	}

	&:hover, &:active, &:focus {
		background-color: var(--color-accent-light);
	}

	&:hover, &:active {
		box-shadow: var(--light-pressed);
	}

	&:active {
		cursor: grabbing;
	}
`;

const Thumb = styled.div.attrs<{left: number}>(({left}) => ({
	style: {
		left: `${left*100}%`
	}
}))<{
	left: number;
	multi: boolean;
}>(({multi}) => css`
	position: absolute;
	z-index: 1;
	top: var(--padding);
	width: var(--thumb-size);
	height: calc(100% - var(--padding) * 2);

	cursor: grab;
	outline: none;
	border-radius: var(--border-radius);
	background-color: ${multi ? 'var(--color-thumb)' : 'var(--color-accent)'};
	transform: translateX(-50%);
	transition: ${['background-color', 'box-shadow'].map(v => `${v} 125ms ease-in-out`).join()};

	&:hover {
		box-shadow: var(--light);
	}

	&:focus {
		box-shadow: var(--focus);
	}

	&:hover, &:active, &:focus {
		background-color: ${multi ? 'var(--color-thumb-light)' : 'var(--color-accent-light)'};
	}

	&:hover, &:active {
		box-shadow: var(--light-pressed);
	}

	&:active {
		cursor: grabbing;
	}
`);

const Slider = styled.div`
	--size: ${size.M};
	--thumb-size: ${size.S};
	--border-radius: ${radius.M};
	--padding: ${size.XXS};

	--color-background: ${background.M};
	--color-background-light: ${background.L};
	--color-background-disabled: ${background.XXD};
	--color-thumb: ${background.M};
	--color-thumb-light: ${background.L};
	--color-thumb-disabled: ${background.XD};
	--color-handle-disabled: ${background.D};

	--color-accent: ${accent.M};
	--color-accent-light: ${accent.L};

	--shadow: ${getShadow('M')};
	--light: ${getShadow('L', accent.L)};
	--light-pressed: ${getShadow('M', accent.L)};
	--focus: ${focus};

	--thumb-shift: calc(var(--thumb-size) / 2 + var(--padding));

	position: relative;
	width: 20rem;
	height: var(--size);
	margin: 0 var(--thumb-shift) 0 var(--thumb-shift);

	display: flex;
	--webkit-user-drag: none;
	user-select: none;

	&::before {
		position: absolute;
		content: '';
		left: calc(-1 * var(--thumb-shift));
		width: calc(100% + var(--thumb-shift) * 2);
		height: 100%;

		background-color: var(--color-background);
		box-shadow: var(--shadow);
		border-radius: var(--border-radius);
	}

	&[aria-disabled='true']{
		pointer-events: none;

		&::before {
			background-color: var(--color-background-disabled);
		}

		${Thumb}{
			background-color: var(--color-thumb-disabled);
		}

		${Handle}{
			background-color: var(--color-handle-disabled);
		}
	}
`;

export default {Slider, Thumb, Handle};