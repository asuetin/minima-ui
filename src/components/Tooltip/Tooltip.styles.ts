import styled, {css, keyframes} from 'styled-components';

import themeDefault from 'utils/theme';

const Tooltip = styled.div<{text: string; delay: number}>(({theme, text, delay}) => {
	const {fontFamily, background, content, size, radius, shadow} = theme.minima ?? themeDefault;

	return css`
		position: relative;

		@media (hover: hover) and (pointer: fine) {
			&::after {
				content: '${text}';
				position: absolute;
				left: 50%;
				top: calc(-100% - ${size[0]});
				transform: translateX(-50%);

				height: calc(${size[3]} / 1.5);

				background-color: ${background[9]};

				font-family: ${fontFamily};
				font-size: 0.8rem;
				white-space: nowrap;
				color: ${content[3]};

				border-radius: ${radius[2]};
				box-shadow: ${shadow[0]};

				display: none;
				align-items: center;
				padding: 0 ${size[1]} 0 ${size[1]};

				user-select: none;
				pointer-events: none;
			}

			&:hover {
				&::after {
					display: flex;

					animation: ${keyframes`
						0% {
							opacity: 0;
						}
						75% {
							opacity: 0;
						}
						100% {
							opacity: 0.9;
						}
					`} ${delay + 125}ms ease-in-out forwards;
				}
			}
		}
	`;
});

export default {Tooltip};