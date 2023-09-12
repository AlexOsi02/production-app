import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: paths.html
    });
    const progressPlugin = new webpack.ProgressPlugin();
    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    })

    return [
        htmlWebpackPlugin,
        progressPlugin,
        miniCssExtractPlugin
    ]
}