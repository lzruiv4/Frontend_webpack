// 引入一个包
const path = require('path');

//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');

// webpack中的所有配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: "./src/ag/lam/index.ts", 

    // 指定打包文件的目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件
        filename: "bundle.js"
    },

    module: {
        // 指定加载的规则
        rules: [
            {
                // test 指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: 'ts-loader',
                // 需要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: "title"
        }),
    ]
};