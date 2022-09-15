const path = require('path');
const HtmlPlugin = require('html-webpack-plugin@5.3.2')
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const HtmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html'
})
module.exports = {
    // devtool:'eval-source-map',//开发调试错误精准定位,项目发布时关闭
    //只暴漏行号不暴露源码
    devtool:'nosources-source-map',//开发调试错误精准定位,项目发布时关闭
    mode: 'development',
    entry: path.join(__dirname, '.src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundel.js',

    },
            //插件的数组
            plugins: [HtmlPlugin,  new CleanWebpackPlugin() ],
            devServer: {
        open: true, // 自动启动浏览器
        host: "0.0.0.0", // localhost
        port: 8001, // 端口号
        https: false
    },
    module: {
        rules: [{
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jpg|png|gif$/,
                use: 'url-loader?limit=470&outputPath=images'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve:{
        alias:{
            '@':path.join(__dirname,'./src/')
        }
    }
}