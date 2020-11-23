const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ],
    },
    devtool: "source-map", 
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
    devServer: {
        port: 3000,
    }
}