const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const hostEnvironment = process.env.HOST || 'electron';

const config = {
    node: {
        fs: 'empty'
    },
    entry: {
        'main': [
            './src/entry.js'
        ]
    },
    devtool: 'source-map',
    output: {
        path: path.join(process.cwd(), 'dist/'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'

        },
        {
            test: /\.less$/,
            use: [{
                loader: 'style-loader' // creates style nodes from JS strings
            }, {
                loader: 'css-loader' // translates CSS into CommonJS
            }, {
                loader: 'less-loader' // compiles Less to CSS
            }]
        },
        {
            test: /\.svg/,
            use: {
                loader: 'svg-url-loader',
                options: {}
            }
        },
        {
            test: /\.(png|jp(e*)g)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                }
            }]
        },
        {
            test: /\.(ttf|eot|woff|woff2)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '/assets/fonts/[name].[ext]'
                }
            }]
        }
        ]
    },
    plugins: [
        // new ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
        new CopyWebpackPlugin([{
            from: 'src/'
        }], {
            ignore: ['script.js', 'less/**', 'entry.js', 'js/**']
        }),
        new DefinePlugin({
            HOST: JSON.stringify(hostEnvironment)
        })
    ]
};

module.exports = config;
