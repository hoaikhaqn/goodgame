const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DOMAIN = process.env.DOMAIN || './';

module.exports = (env) => {
    console.log(env);

    return {
        entry: [
            "@babel/polyfill",
            "./src/index.js"
        ],
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'assets/js/[name].bundle.js',
            chunkFilename: 'assets/js/[name].[chunkhash].bundle.js',
        },
        optimization: {
            splitChunks: {
                minSize: 150000,
                maxSize: 230000,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                        name: 'vendor',
                        chunks: 'all',
                    }
                }
            },
            runtimeChunk: {
                name: "manifest",
            }
        },
        module: {
            rules: [{
                    use: 'babel-loader',
                    test: /\.js[x]?$/,
                    exclude: '/node_modules',
                },
                {
                    test: /\.(css|s[ac]ss)$/i,
                    loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(woff|woff2|eot|ttf)$/i,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/fonts',
                    },
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/images',
                    },
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'assets/css/style.css',
                chunkFilename: 'assets/css/[name].chunk.css',
            }),
            new HtmlWebpackPlugin({
                favicon: './public/favicon.ico',
                publicPath: DOMAIN,
                template: './public/index.html'
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            open: true,
            disableHostCheck: true,
            hot: true,
            historyApiFallback: {
                index: '/',
            },
            overlay: true,
            compress: true,
            stats: 'minimal',
            port: 3000
        }
    }
};