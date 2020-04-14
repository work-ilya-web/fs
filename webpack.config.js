const path = require('path');
const webpack = require('webpack');

module.exports = {
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/',
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true,
                },
            },
        },
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: 'usage',
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },

    resolve: {
        alias: {
            '%modules%': path.resolve(__dirname, 'src/blocks/modules'),
            '%components%': path.resolve(__dirname, 'src/blocks/components'),
        },
    },
};
