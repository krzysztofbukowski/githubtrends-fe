
/*jshint esversion: 6 */
(function() {
    "use strict";

    const
        webpack = require('webpack'),
        path = require('path'),
        HtmlWebpackPlugin = require('html-webpack-plugin'),
        ExtractTextPlugin = require("extract-text-webpack-plugin");

    module.exports = {
        devtool: 'source-map',
        entry: {
            main: "./src/main.ts",
            vendor: "./src/vendor.ts",
            polyfills: "./src/polyfills.ts"
        },

        output: {
            path: __dirname + "/dist",
            filename: "[name].js",
            publicPath: "/",
        },

        resolve: {
            extensions: ['.ts', '.js']
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: {
                                configFileName: __dirname + '/src/tsconfig.json'
                            }
                        },
                        'angular2-template-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.scss$/,
                    loaders: ['raw-loader', 'sass-loader']
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    loader: 'file-loader?name=assets/[name].[hash].[ext]'
                },
            ]
        },

        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'ENV': JSON.stringify(process.env.NODE_ENV)
                }
            }),
            new HtmlWebpackPlugin({
                  template: 'src/index.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['main', 'vendor', 'polyfills']
            }),
            new ExtractTextPlugin({})
        ],

        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 8080
        },

    };
})();
