const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var getHtmlConfig = function(name, title) {
    return {
        template: './src/view/' + name + '.html',
        filename: 'view/' + name + '.html',
        favicon: './favicon.ico',
        title: title,
        inject: true,
        hash: true,
        chunks: ['common', name]
    };
};

module.exports = {
    // 入口文件
    entry: {
        vendor: ['react-hot-loader/patch'],
        'index': ['./src/pages/index/index.jsx'],
        'login': ['./src/pages/login/index.jsx']
    },
    // 输出文件
    output: {
        /* path-webpack打包的文件要放的位置，
           .resolve-解析一个路径，
           __dirname-当前目录基础，找到dist */
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        // 输出文件名称
        filename: 'js/[name].js'
    },
    // import引用
    resolve: {
        alias: {
            pages: path.resolve(__dirname, 'src/pages'),
            components: path.resolve(__dirname, 'src/components'),
        }
    },
    // loaders
    module: {
        rules: [
            // eslint-loader
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            // babel-loader(react语法的处理）
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            // style-loader & css-loader & extractTextWebpackPlugin（css文件的处理）
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // scss-loader（scss文件的处理）
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            // url-loader（图片的配置）
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'resource/[name].[ext]'
                    }
                }]
            },
            // 字体图标的配置
            {
                test: /\.(woff|svg|eot|ttf|woff2|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'resource/[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        // html文件处理
        // new HtmlWebpackPlugin({
        //     template: './src/view/login.html',
        //     filename: 'login.html'
        // }),
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
        new HtmlWebpackPlugin(getHtmlConfig('login', '商品列表页')),

        // 独立css文件
        new ExtractTextPlugin('css/[name].css'),
        // 提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js',
        }),
        // 局部热加载
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 7778,
        hot: true
    },
};