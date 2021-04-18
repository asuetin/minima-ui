import styled, {css} from 'styled-components';

const Icon = styled.svg<{
	stroke?: string;
	fill?: string;
}>(({
	stroke = 'rgb(0,0,0)',
	fill = 'rgb(0,0,0)'
}) => css`
	stroke: ${stroke};
	fill: ${fill};

	transition: ${['stroke', 'fill'].map(v => `${v} 125ms ease-in-out`).join()};
`);

export default {Icon};