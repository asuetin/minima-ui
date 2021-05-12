import styled, {css} from 'styled-components';

import {pxToRem} from 'utils/functions';

import themeDefault from 'utils/theme';

import List from 'components/List';
import {IconStyles} from 'components/Icon';

const DataRaw = styled.span(({theme}) => {
	const {size} = theme.minima ?? themeDefault;

	return css`
		width: 100%;

		line-height: var(--row-height);
		text-overflow: ellipsis;
		white-space: nowrap;

		display: inline-block;
		overflow: hidden;

		padding-left: ${size[2]};
		box-sizing: border-box;
	`;
});

const Cell = styled.td.attrs({tabIndex: -1})(({theme}) => {
	const {radius, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		height: var(--row-height);

		border-radius: ${radius[2]};
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
	const {size} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		display: grid;
	`;
});

const ResizeHandle = styled.div(({theme}) => {
	const {size, background} = theme.minima ?? themeDefault;

	return css`
		z-index: 1;
		position: absolute;
		right: calc(-${size[2]} / 1.25);
		top: 0;
		width: ${size[2]};
		height: 100%;
		margin-left: auto;

		cursor: col-resize;

		background: linear-gradient(${background[3]}, ${background[3]}) no-repeat 50%/calc(${size[0]} / 2) 50%;
	`;
});

const Header = styled.span<{sort: 'asc' | 'desc' | undefined | 'disabled'}>(({theme, sort}) => {
	const {size, content} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		font-size: 0.75rem;
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
			transform: translateY(10%) rotate(270deg);

			fill: ${content[3]};
			stroke: ${content[3]};

			transition: ${['stroke', 'fill', 'transform'].map(v => `${v} 125ms ease-in-out`).join()};

			${sort == 'desc' && css`
				transform: translateY(10%) rotate(90deg);
			`}
		}
	`;
});

const HeaderCell = styled.th.attrs(({tabIndex}) => ({tabIndex}))(({theme}) => {
	const {size, radius, focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		width: 100%;
		height: var(--row-height);

		border-radius: ${radius[2]};
		outline: none;

		display: flex;
		justify-content: start;
		align-items: center;
		padding: 0;
		padding-left: ${size[2]};
		box-sizing: border-box;

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
}))<RowProps & {padded: boolean}>(({theme, padded}) => {
	const {size, background} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		background-color: ${background[8]};

		display: grid;
		padding-right: ${padded ? size[0] : 0};
		box-sizing: border-box;
	`;
});

const Content = styled(List).attrs({tagName: 'tbody'})(({theme}) => {
	const {size, content, radius, focus} = theme.minima ?? themeDefault;

	return css`
		position: absolute;
		width: 100%;
		top: ${size[3]};
		height: var(--content-height);

		border-radius: 0 0 ${radius[2]} ${radius[2]};
		outline: none;

		&:focus-visible {
			box-shadow: ${focus};
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
const Table = styled.table<{rowHeight: number; rowCount: number}>(({theme, rowHeight, rowCount}) => {
	const {fontFamily, size, background, content, radius, shadow} = theme.minima ?? themeDefault;

	return css`
		--row-height: ${pxToRem(rowHeight)}rem;
		--content-height: calc(var(--row-height) * ${rowCount});

		position: relative;
		width: 50rem;
		height: calc(var(--row-height) + var(--content-height));

		background-color: ${background[9]};

		border-collapse: collapse;
		border-radius: ${radius[2]};
		box-shadow: ${shadow[0]};

		font-family: ${fontFamily};
		color: ${content[3]};

		padding: ${size[3]};
		box-sizing: border-box;
	`;
});

export default {Table, HeaderRow, HeaderCell, Header, ResizeHandle, Content, Row, Cell, DataRaw};