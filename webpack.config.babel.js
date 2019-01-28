import path from 'path';

export default {
	mode: 'development',
	devtool: 'eval',
	entry: {
		index: './src/index.js',
	},
	output: {
		publicPath: '/',
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
			  test: /\.js$/,
			  exclude: /node_modules/,
			  use: {
				loader: 'babel-loader'
			  }
			}
		]
	},	
	devServer: {
		hot: true,
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