const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../../src/main/webapp/'),
        index: "index_dev.html",
        host: 'draw.liuchengtu.com',
        compress: false,//不压缩
        port: 8765,
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true,
    },
    plugins: common.plugins.concat([
        new HtmlWebpackPlugin({
            environment: 1,
            template: path.resolve(__dirname, '../../src/main/webapp/index_dev.htm'),
            // inject: 'head'
        }),
        new webpack.HotModuleReplacementPlugin(),
        //每次开发环境编译时强制删除index.html文件
        new CleanWebpackPlugin({
            dry: false,
            cleanAfterEveryBuildPatterns:[path.resolve(__dirname,"../../src/main/webapp/index.html")],
            dangerouslyAllowCleanPatternsOutsideProject: true,
        })
    ])
});