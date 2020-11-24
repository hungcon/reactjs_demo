const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js',
        // publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jp?g|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]"
                    }
                }
            }
        ],
    },
    devtool: "source-map", 
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        })
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true,
    }
}