import styled, {css} from 'styled-components';

const Icon = styled.svg<{
	size: string;
	color?: string;
}>(({
	size,
	color
}) => css`
	min-width: ${size};
	min-height: ${size};

	width: ${size};
	height: ${size};

	stroke: ${color};
	fill: ${color};

	transition: ${['stroke', 'fill'].map(v => `${v} 125ms ease-in-out`).join()};
`);

export default {Icon};