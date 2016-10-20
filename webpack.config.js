var path = require("path");
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    debug: true,
    cache: true,

    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        "./src/app"
    ],

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: '/static/'
    },

    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".css"]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.tsx?$/,
                loaders: [
                    'react-hot',
                    'ts-loader'
                ],
                include: path.join(__dirname, 'src')
            }
        ]
    }
};
