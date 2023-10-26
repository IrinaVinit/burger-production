import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const {paths, mode, isDev} = options;
    return {
      mode: mode,
      entry: paths.entry,
        output: {
          path: paths.build,
          filename: "[name].[contenthash].js",
          clean: true,
        },
        plugins: buildPlugins(options),
        module: {
          // здесь обрабатываются файлы, которые выходяь за рамки js. Для этого нужны разные лоадеры
          rules: buildLoaders(options),
        },
        // в resolve указываем расширения, для которых при импорте не будем это расширение указывать
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
      };
}