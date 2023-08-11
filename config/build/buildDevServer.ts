import {BuildOptions} from "./types/config";
import type {Configuration} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions):Configuration {
    const {port} = options;
    return {
        open: true,
        port,
        historyApiFallback: true
    }
}