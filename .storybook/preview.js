import {addDecorator} from '@storybook/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';
import {ThemeProvider} from 'styled-components';

import {minimaLight, minimaDark, minimaPlain} from 'utils/theme';

const themes = [
	{
		name: 'Minima Light',
		minima: minimaLight
	}, {
		name: 'Minima Dark',
		minima: minimaDark
	}, {
		name: 'Minima Plain',
		minima: minimaPlain
	}
];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
	layout: 'centered',
};