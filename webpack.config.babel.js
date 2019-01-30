import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	mode: 'development',
	devtool: 'eval',
	entry: {
		index: './src/index.tsx',
	},
	output: {
		publicPath: '/',
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [	
		new HtmlWebpackPlugin({
			title: '模板',
			hash: false,
			filename: 'index.html',
			template: './index.html',
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							localIdentName: '[path][name]__[local]--[hash:base64:5]'
						}
					}
				]
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							import: true,
							importLoaders: 1,
							localIdentName: '[path][name]__[local]--[hash:base64:5]'
						}
					},
					{ loader: 'stylus-loader' },
				]
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader'
				}
			}
		]
	},
	devServer: {
		port: 3000
	},
	resolve: {
		extensions: [
			'.jsx',
			'.js',
			'.ts',
			'.tsx'
		]
	}
};