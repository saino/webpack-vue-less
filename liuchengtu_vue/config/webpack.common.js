const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        "liuchengtu_vue_main": path.resolve(__dirname, '../src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../../src/main/webapp/liuchengtu_vue_dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {   
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(jpg|png|gif|jpeg|svg)$/,
                loader: [{
                    loader: 'url-loader', 
                    options: {
                        limit: 10000,
                        name: "../static/[hash:8].[name].[ext]"
                    }
                }]
            },
            {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                //   options: {
                //     attrs: [':data-src']
                //   }
                }
              }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]

};