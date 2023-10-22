import path from "path";
import webpack from "webpack";
import { buildPlugins } from "./config/build/buildPlugins";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildResolvers } from "./config/build/buildResolvers";

const config: webpack.Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.ts"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  plugins: buildPlugins(),
  module: {
    // здесь обрабатываются файлы, которые выходяь за рамки js. Для этого нужны разные лоадеры
    rules: buildLoaders(),
  },
  // в resolve указываем расширения, для которых при импорте не будем это расширение указывать
  resolve: buildResolvers(),
};

export default config;
