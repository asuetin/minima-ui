const configMain = require('../webpack.config.js');
const package = require('../package.json');

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
		'storybook-addon-styled-component-theme/dist/preset'
	],
	core: {
		builder: 'webpack5'
	},
	webpackFinal: async config => {
		const {resolve, plugins} = configMain(process.env);

		config.module.rules.push({
			test: /^.*\.(mdx|MD)$/,
			loader: 'string-replace-loader',
			options: {
				multiple: [
					{
						search: 'REPOSITORY_URL',
						replace: package.repository.url.slice(0, -4),
						flags: 'g'
					}, {
						search: 'PACKAGE_NAME',
						replace: package.name,
						flags: 'g'
					}, {
						search: 'LIBRARY_NAME',
						replace: 'Minima UI',
						flags: 'g'
					}
				]
			}
		});

		config.resolve.alias = {
			...config.resolve.alias,
			...resolve.alias
		}

		config.plugins.push(plugins[0]);

		return config
	}
}