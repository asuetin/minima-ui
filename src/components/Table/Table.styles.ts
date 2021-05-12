import styled, {css} from 'styled-components';

import {pxToRem} from 'utils/functions';

import themeDefault from 'utils/theme';

import List from 'components/List';
import {IconStyles} from 'components/Icon';

const DataRaw = styled.span`
	width: 100%;

	line-height: var(--row-height);
	text-overflow: ellipsis;
	white-space: nowrap;

	display: inline-block;
	overflow: hidden;
`;

const Cell = styled.td.attrs({tabIndex: -1})(({theme}) => {
	const {focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		height: var(--row-height);

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
}))<RowProps>`
	position: relative;

	display: grid;
`;

const ResizeHandle = styled.div(({theme}) => {
	const {size} = theme.minima ?? themeDefault;

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
	const {size} = theme.minima ?? themeDefault;

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

const HeaderCell = styled.th.attrs(({tabIndex}) => ({tabIndex}))(({theme}) => {
	const {focus} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		width: 100%;
		height: var(--row-height);

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
	const {size} = theme.minima ?? themeDefault;

	return css`
		position: relative;
		margin-right: ${size[0]};

		display: grid;
	`;
});

const Content = styled(List).attrs({tagName: 'tbody'})(({theme}) => {
	const {content, size, radius} = theme.minima ?? themeDefault;

	return css`
		position: absolute;
		width: 100%;
		top: ${size[3]};
		height: var(--content-height);

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
const Table = styled.table<{rowHeight: number; rowCount: number}>(({rowHeight, rowCount}) => css`
	--row-height: ${pxToRem(rowHeight)}rem;
	--content-height: calc(var(--row-height) * ${rowCount});

	position: relative;
	width: 50rem;
	height: calc(var(--row-height) + var(--content-height));

	border-collapse: collapse;
`);

export default {Table, HeaderRow, HeaderCell, Header, ResizeHandle, Content, Row, Cell, DataRaw};