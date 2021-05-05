import {render} from '@testing-library/react';

import {Icon} from '../';

describe('Icon', () => {
	test('render an svg icon', async () => {
		const {rerender} = render(<Icon preset='gear'/>);
		rerender(
			<Icon
				viewBoxSize={24}
				path={
					<g fillOpacity='0' transform="translate(0 -1098.52)">
    				<circle cy="1110.52" cx="12" r="11"/>
						<path d="M10 1116.52v-12h4"/>
						<path d="M8 1110.52h6.01M7.973 1113.52h6.054"/>
						<path d="m 14,1104.5197 a 3,3 0 0 1 3,3 3,3 0 0 1 -3,3"/>
					</g>
				}
			/>
		);
	});
});