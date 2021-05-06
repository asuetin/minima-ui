import styled, {css} from 'styled-components';

import themeDefault from 'utils/theme';

const Handle = styled.div.attrs<{left: number; width: number}>(({theme, left, width}) => {
	const {size} = theme.minima ?? themeDefault;

	return {
		style: {
			left: `calc(${left*100}% - ${size[1]} - ${size[0]})`,
			width: `calc(${width*100}%  + ${size[1]} + ${size[2]})`
		}
	};
})<{
	left: number;
	width: number;
}>(({theme}) => {
	const {accent, radius, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: absolute;
		top: 0;
		height: 100%;

		cursor: grab;
		outline: none;
		border-radius: ${radius[2]};
		background-color: ${accent[7]};
		transition: ${['background-color', 'box-shadow'].map(v => `${v} 125ms ease-in-out`).join()};

		&:hover {
			box-shadow: ${light[1]};
		}

		&:focus {
			box-shadow: ${focus};
		}

		&:hover, &:active, &:focus {
			background-color: ${accent[9]};
		}

		&:hover, &:active {
			box-shadow: ${light[0]};
		}

		&:active {
			cursor: grabbing;
		}
	`;
});

const Thumb = styled.div.attrs<{left: number}>(({left}) => ({
	style: {
		left: `${left*100}%`
	}
}))<{
	left: number;
	multi: boolean;
}>(({theme, multi}) => {
	const {background, accent, size, radius, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: absolute;
		z-index: 1;
		top: ${size[0]};
		width: ${size[2]};
		height: calc(100% - ${size[1]});

		cursor: grab;
		outline: none;
		border-radius: ${radius[2]};
		background-color: ${multi ? background[8] : accent[7]};
		transform: translateX(-50%);
		transition: ${['background-color', 'box-shadow'].map(v => `${v} 125ms ease-in-out`).join()};

		&:hover {
			box-shadow: ${light[1]};
		}

		&:focus {
			box-shadow: ${focus};
		}

		&:hover, &:active, &:focus {
			background-color: ${multi ? background[9] : accent[9]};
		}

		&:hover, &:active {
			box-shadow: ${light[0]};
		}

		&:active {
			cursor: grabbing;
		}
	`;
});

const Slider = styled.div(({theme}) => {
	const {background, size, radius, shadow} = theme.minima ?? themeDefault;

	return css`
		--thumb-shift: calc(${size[1]} + ${size[0]});

		position: relative;
		width: calc(${size[4]} * 3);
		height: ${size[3]};
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

			background-color: ${background[8]};
			box-shadow: ${shadow[0]};
			border-radius: ${radius[2]};
		}

		&[aria-disabled='true']{
			pointer-events: none;

			&::before {
				background-color: ${background[4]};
			}

			${Thumb}{
				background-color: ${background[6]};
			}

			${Handle}{
				background-color: ${background[7]};
			}
		}
	`;
});

export default {Slider, Thumb, Handle};