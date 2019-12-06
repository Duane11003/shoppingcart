const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
        module: {
            rules: [
                { test: /\.(js)$/, use: 'babel-loader' },
                { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
                // { test: /\.(jsx)$/, use: 'babel-loader' }
            ]
        },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    devServer: {
        contentBase: 'build',
        port: 8080,
        historyApiFallback: true,
        proxy: {
            '/': 'http://localhost:3000',
            '/banana': 'http://localhost:3000/banana',
            '/durian': 'http://localhost:3000/durian',
        }
    }
}