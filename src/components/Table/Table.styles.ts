import styled, {css} from 'styled-components';

import {pxToRem} from 'utils/functions';

import themeDefault from 'utils/theme';

import List from 'components/List';
import {IconStyles} from 'components/Icon';

const DataRaw = styled.span(({theme}) => {
	const {fontFamily, size, background, accent, content, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		width: 100%;

		text-overflow: ellipsis;
		white-space: nowrap;

		display: inline-block;
		overflow: hidden;
	`;
});

const Cell = styled.td(({theme}) => {
	const {fontFamily, size, background, accent, content, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		outline: none;

		padding: 0;

		&:focus-visible {
			box-shadow: inset ${focus};
		}
	`;
});

type RowProps = {gridTemplateColumns: string};

const Row = styled.tr.attrs<RowProps>(({gridTemplateColumns}) => ({
	style: {
		gridTemplateColumns
	}
}))<RowProps>(({theme}) => {
	const {fontFamily, background, accent, content, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		display: grid;
	`;
});

const ResizeHandle = styled.div(({theme}) => {
	const {fontFamily, size, background, accent, content, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: absolute;
		right: 0;
		top: 0;

		width: ${size[1]};
		height: 100%;
		margin-left: auto;

		cursor: col-resize;
	`;
});

const Header = styled.span<{sort: 'asc' | 'desc' | undefined | 'disabled'}>(({theme, sort}) => {
	const {fontFamily, size, background, accent, content, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		text-overflow: ellipsis;
		white-space: nowrap;

		display: inline-block;
		overflow: hidden;

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

const HeaderCell = styled.th(({theme}) => {
	const {fontFamily, size, background, accent, content, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		width: 100%;
		height: ${size[3]};

		outline: none;

		display: flex;
		justify-content: start;
		align-items: center;
		padding: 0;

		--webkit-user-drag: none;
		touch-action: none;
		user-select: none;

		&:focus-visible {
			box-shadow: inset ${focus};
		}
	`;
});

const HeaderRow = styled.tr.attrs<RowProps>(({gridTemplateColumns}) => ({
	style: {
		gridTemplateColumns
	}
}))<RowProps>(({theme}) => {
	const {fontFamily, size, background, accent, content, radius, shadow, light, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		display: grid;
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

		${DataRaw}{
			line-height: ${pxToRem(rowHeight)}rem;
		}

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

export default {Table, HeaderRow, HeaderCell, Header, ResizeHandle, Content, Row, Cell, DataRaw};