const path = require('path');
const webpack = require('webpack');
const package = require('./package.json');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = env => ({
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'jsx'],
		alias: {
			components: path.resolve(__dirname, './src/components/'),
			utils: path.resolve(__dirname, './src/utils/'),
			stories: path.resolve(__dirname, './src/stories/')
		}
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './dist'),
		library: {
			name: package.name,
			type: 'umd'
		},
	},
	externals: {
		'styled-components': {
			commonjs: 'styled-components',
			commonjs2: 'styled-components',
			amd: 'styled-components'
		},
		'react': {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'react'
		},
		'react-dom': {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'react-dom'
		},
		'typescript': {
			commonjs: 'typescript',
			commonjs2: 'typescript',
			amd: 'typescript'
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					...env && env.production ? {} : {
						getCustomTransformers: () => ({
							before: [styledComponentsTransformer]
						})
					}
				},
				exclude: /node_modules/,
			}, {
				test: /\.tsx?$/,
				loader: 'stylelint-custom-processor-loader',
				exclude: /node_modules/,
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			LIBRARY_NAME: 'Minima UI',
			PACKAGE_NAME: JSON.stringify(package.name),
			REPOSITORY_URL: JSON.stringify(package.repository.url.slice(0, -4))
		}),
		new CleanWebpackPlugin(),
		new ForkTsCheckerWebpackPlugin({
			eslint: {
			  	files: './src/**/*.{ts,tsx,js,jsx}'
			}
		})
	],
	...env && env.production ? {} : {
		devtool: 'source-map'
	}
});