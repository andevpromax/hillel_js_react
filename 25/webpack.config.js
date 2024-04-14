const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						esModule: false,
					},
				}, "css-loader"],
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
		filename: 'styles.css',
		}), 
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	devServer: {
		port: 8080
	}
}