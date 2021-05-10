import styled, {css} from 'styled-components';

import {pxToRem} from 'utils/functions';

import themeDefault from 'utils/theme';

import List from 'components/List';
import {IconStyles} from 'components/Icon';

const Cell = styled.td(({theme}) => {
	const {fontFamily, background, accent, content, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		display: flex;
		align-items: center;
	`;
});

const Row = styled.tr<{gridTemplateColumns: string}>(({theme, gridTemplateColumns}) => {
	const {fontFamily, background, accent, content, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		display: grid;
		grid-template-columns: ${gridTemplateColumns};
	`;
});

const HeaderElement = styled.th<{sort: 'asc' | 'desc' | undefined | 'disabled'}>(({theme, sort}) => {
	const {fontFamily, size, background, accent, content, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		height: ${size[3]};
		margin: 0;

		display: flex;
		align-items: center;

		${sort == 'disabled' ? css`
			pointer-events: none;
		` : css`
			cursor: pointer;
		`}

		${IconStyles.Icon}{
			margin-left: ${size[1]};
			transform: rotate(270deg);
			transition: ${['stroke', 'fill', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};

			${sort == 'desc' && css`
				transform: rotate(90deg);
			`}
		}
	`;
});

const Header = styled.tr<{gridTemplateColumns: string}>(({theme, gridTemplateColumns}) => {
	const {fontFamily, size, background, accent, content, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		display: grid;
		grid-template-columns: ${gridTemplateColumns};
	`;
});

const Content = styled(List).attrs({tagName: 'tbody'})<{visibleRowCount: number}>(({theme, rowHeight, rowCount, visibleRowCount}) => {
	const {background, content, size, radius} = theme.minima ?? themeDefault;

	return css`
		--height: ${pxToRem(rowHeight*Math.min(visibleRowCount, rowCount || 1))}rem;

		position: absolute;
		width: 100%;
		top: 100%;
		height: var(--height);

		::-webkit-scrollbar {
			width: ${size[0]};
		}

		::-webkit-scrollbar-button {
			display: none;
		}

		::-webkit-scrollbar-thumb {
			background-color: ${content[8]};

			border-radius: ${radius[2]};
		}

		@media (hover: hover) and (pointer: fine) {
			::-webkit-scrollbar-thumb:hover {
				background-color: ${content[9]};
			}
		}

		::-webkit-scrollbar-track,
		::-webkit-scrollbar-track-piece,
		::-webkit-resizer,
		::-webkit-scrollbar-corner {
			display: none;
		}
	`;
});
const Table = styled.table(({theme}) => {
	const {fontFamily, background, accent, content, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		width: 50rem;
	`;
});

export default {Table, Header, HeaderElement, Content, Row, Cell};