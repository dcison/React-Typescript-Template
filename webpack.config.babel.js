import path from 'path';
import webpack from 'webpack';
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
		}),
		new webpack.WatchIgnorePlugin([/styl\.d\.ts$/]),
		new webpack.HotModuleReplacementPlugin()
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
				include: path.resolve('src/'),
				use: [
					'style-loader',
					{
						loader: 'typings-for-css-modules-loader',
						options: {
							modules: true,
							namedExport: true,
							camelCase: true,
							minimize: true,
							localIdentName: "[local]_[hash:base64:5]",
							stylus: true
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
		hot: true,
		historyApiFallback: true,
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