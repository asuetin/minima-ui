import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

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
		box-shadow: var(--shadow-light);
	}

	&:focus {
		box-shadow: var(--shadow-focus);
	}

	&:hover, &:active, &:focus {
		background-color: var(--color-accent-light);
	}

	&:hover, &:active {
		box-shadow: var(--shadow-light-active);
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
		box-shadow: var(--shadow-light);
	}

	&:focus {
		box-shadow: var(--shadow-focus);
	}

	&:hover, &:active, &:focus {
		background-color: ${multi ? 'var(--color-thumb-light)' : 'var(--color-accent-light)'};
	}

	&:hover, &:active {
		box-shadow: var(--shadow-light-active);
	}

	&:active {
		cursor: grabbing;
	}
`);

const Slider = styled.div(({theme}) => {
	const {background, accent, size, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		--size: ${size[3]};
		--thumb-size: ${size[2]};
		--border-radius: ${radius[2]};
		--padding: ${size[0]};

		--color-background: ${background[8]};
		--color-background-light: ${background[9]};
		--color-background-disabled: ${background[4]};
		--color-thumb: ${background[8]};
		--color-thumb-light: ${background[9]};
		--color-thumb-disabled: ${background[6]};
		--color-handle-disabled: ${background[7]};

		--color-accent: ${accent[7]};
		--color-accent-light: ${accent[9]};

		--shadow-dark: ${shadow[0]};
		--shadow-light: ${light[1]};
		--shadow-light-active: ${light[0]};
		--shadow-focus: ${focus};

		--thumb-shift: calc(var(--thumb-size) / 2 + var(--padding));

		position: relative;
		width: calc(var(--size) * 5);
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
			box-shadow: var(--shadow-dark);
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
});

export default {Slider, Thumb, Handle};