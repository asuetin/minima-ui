import styled from 'styled-components';

import {size, radius, getShadow, focus} from 'utils/styleVars';

import theme from 'utils/theme';
const {background, accent, content} = theme;

const Bar = styled.div.attrs<{left: number; width: number}>(({left, width}) => ({
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
	border-radius: var(--border-radius);
	background-color: var(--color-accent);

	&:active {
		cursor: grabbing;
	}
`;

const Thumb = styled.div.attrs<{left: number}>(({left}) => ({
	style: {
		left: `${left*100}%`
	}
}))<{
	left: number
}>`
	position: absolute;
	top: var(--padding);
	width: var(--thumb-size);
	height: calc(100% - var(--padding) * 2);

	cursor: grab;
	border-radius: var(--border-radius);
	background-color: var(--color-thumb);
	transform: translateX(-50%);

	&:active {
		cursor: grabbing;
	}
`;

const Slider = styled.div`
	--size: ${size.M};
	--thumb-size: ${size.S};
	--border-radius: ${radius.M};
	--padding: ${size.XXS};

	--color-background: ${background.M};
	--color-background-light: ${background.L};
	--color-background-disabled: ${background.XXD};
	--color-thumb: ${background.XXD};
	--color-thumb-light: ${background.XD};

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
		border: none;
		border-radius: var(--border-radius);
		outline: none;
		transition: ${['background-color', 'box-shadow', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};
	}



	/* &:focus {
		box-shadow: var(--shadow), var(--focus);
	}

	&:hover {
		box-shadow: var(--light);
		background-color: var(--color-background-light);

		&::after {
			background-color: var(--color-thumb-light);
		}
	}

	&:active {
		box-shadow: var(--light-pressed);
		transform: translateY(5%);
	}

	&[aria-checked='true']{
		background-color: var(--color-accent);

		&::after {
			left: calc(70% - var(--padding));
			background-color: var(--color-background);
		}

		&:hover {
			background-color: var(--color-accent-light);

			&::after {
				background-color: var(--color-background-light);
			}
		}
	}

	&:disabled {
		background-color: var(--color-background-disabled);

		&::after {
			background-color: var(--color-thumb-light);
		}
	}

	&:disabled, &[aria-readonly='true'] {
		pointer-events: none;
	} */
`;

export default {Slider, Thumb, Bar};