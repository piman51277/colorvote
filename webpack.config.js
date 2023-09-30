const path = require("path");

module.exports = {
  entry: "./web/src/index.ts",
  target: "web",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsloader.json"),
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "web", "assets"),
  },
  cache: {
    type: "filesystem",
  },
  mode: "production",
};
