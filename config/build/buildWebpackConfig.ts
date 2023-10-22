import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const {paths, mode} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
          path: paths.build,
          filename: "[name].[contenthash].js",
          clean: true,
        },
        plugins: buildPlugins(options),
        module: {
          // здесь обрабатываются файлы, которые выходяь за рамки js. Для этого нужны разные лоадеры
          rules: buildLoaders(),
        },
        // в resolve указываем расширения, для которых при импорте не будем это расширение указывать
        resolve: buildResolvers(),
      };
}