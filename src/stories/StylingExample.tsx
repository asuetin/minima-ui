import {FC, useState} from 'react';
import styled from 'styled-components';

import Slider, {SliderStyles} from 'components/Slider';

const {Thumb} = SliderStyles;

const SliderStyled = styled(Slider)`
	&::before {
		border-radius: 0;

		box-sizing: border-box;
		border: 0.125rem solid black;

		background-color: white;
		box-shadow: none;
	}

	${Thumb}{
		border-radius: 0;

		background-color: black;

		&:hover, &:active {
			background-color: grey;
			box-shadow: none;
		}
	}
`;

const StylingExample: FC<{styled?: boolean}> = ({styled = false}) => {
	const [value, setValue] = useState(33);

	const Component = styled ? SliderStyled : Slider;

	return <div
		style={{
			display: 'grid',
			alignItems: 'center',
			gridTemplateColumns: '12rem 8rem',
			gridGap: '0.5rem'
		}}
	>
		<Component
			value={value}
			range={[0, 100]}
			onChange={(v: number) => setValue(v)}
			aria-labelledby='label'
		/>
		<label id='label'>{value.toFixed(2)}</label>
	</div>;
};

export default StylingExample;