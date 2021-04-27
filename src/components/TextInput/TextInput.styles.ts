import styled from 'styled-components';

import {size, radius, getShadow, focus} from 'utils/styleVars';

import theme from 'utils/theme';
const {background, accent, content} = theme;

const TextInput = styled.input`
	--size: ${size.M};
	--border-radius: ${radius.M};
	--padding: ${size.XS};
	--checkmark-thickness: calc(${size.XXS} / 1.25);

	--color-background: ${background.M};
	--color-background-light: ${background.L};
	--color-background-disabled: ${background.XXD};
	--color-handle: ${background.XXD};
	--color-handle-light: ${background.XD};

	--color-content: ${content.M};
	--color-placeholder: ${content.XL};
	--color-accent: ${accent.M};
	--color-accent-light: ${accent.L};

	--color-scrollbar: ${content.L};
	--color-scrollbar-hover: ${content.XL};

	--shadow: ${getShadow('M')};
	--light: ${getShadow('L', accent.L)};
	--light-pressed: ${getShadow('M', accent.L)};
	--focus: ${focus};

	position: relative;
	width: 20rem;
	height: var(--size);

	font-family: 'Open Sans', sans-serif;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	color: var(--color-content);
	background-color: var(--color-background);
	box-shadow: var(--shadow);
	outline: none;
	border: none;
	border-radius: var(--border-radius);
	transition: ${['background-color', 'box-shadow'].map(v => `${v} 125ms ease-in-out`).join()};

	padding: 0 var(--padding) 0 var(--padding);

	&[aria-multiline='true']{
		padding: var(--padding);
	}

	&::placeholder {
		color: var(--color-placeholder);
	}

	&:focus, &:hover {
		box-shadow: var(--light);
		background-color: var(--color-background-light);
	}

	&[aria-disabled='true']{
		background-color: var(--color-background-disabled);
	}

	&[aria-disabled='true'], &[aria-readonly='true']{
		pointer-events: none;
	}

	::-webkit-scrollbar {
		width: var(--width-scrollbar);
	}

	::-webkit-scrollbar-button {
		display: none;
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--color-scrollbar);
		border-radius: var(--border-radius);
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: var(--color-scrollbar-hover);
	}

	::-webkit-scrollbar-track,
	::-webkit-scrollbar-track-piece,
	::-webkit-resizer,
	::-webkit-scrollbar-corner {
		display: none;
	}
`;

export default {TextInput};