import styled, {css, keyframes} from 'styled-components';

import themeDefault from 'utils/theme';

const Content = styled.div(({theme}) => {
	const {background, size, radius, border, shadow} = theme.minima ?? themeDefault;

	return css`
		position: fixed;
		left: 50%;
		top: 50%;
		width: 40%;
		height: 20%;
		transform: translate(-50%, -50%);

		background-color: ${background[8]};

		border: ${border[0]};
		border-radius: ${radius[2]};
		box-shadow: ${shadow[0]};

		align-items: center;
		padding: ${size[1]};
		box-sizing: border-box;

		animation: ${keyframes`
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		`} 125ms ease-in-out;
	`;
});

const Modal = styled.div`
	position: fixed;
	left: 0;
	top: 0;

	width: 100vw;
	height: 100vh;
`;

export default {Modal, Content};