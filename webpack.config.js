const path = require("path");
const webpack = require("webpack");
const isProd = process.env.NODE_ENV === 'development';



const plugins = [

];

// Production configs and setup
if (isProd) {
    plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            output: {
                comments: false,
            },
        })
    );
}

module.exports = {
    entry: [
        "./src/client.js"
    ],
    output:{
        path: path.resolve(__dirname, "public/scripts"),
        filename: "bundle.js",
    },
    module:{
        rules:[
            {
                 test: /\.js$/,
                 include:path.resolve(__dirname, "src"),
                 loader: "babel-loader",
                 query: {
                    presets: ['babel-preset-env', "react"]
                 }
            }
        ]
    },
    plugins,
    devServer:{
        contentBase: path.join(__dirname, "public"),
        compress:true,
        open:true,
        openPage:"",
        stats:"errors-only"
    }
}

