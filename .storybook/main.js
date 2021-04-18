const path = require('path');

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y'
	],
	core: {
		builder: 'webpack5'
	},
	webpackFinal: async config => {
		config.resolve.alias.components = path.resolve(__dirname, '../src/components');
		config.resolve.alias.utils = path.resolve(__dirname, '../src/utils');
		config.resolve.alias.stories = path.resolve(__dirname, '../src/stories');
		return config
	}
}