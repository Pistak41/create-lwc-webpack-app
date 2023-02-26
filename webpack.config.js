const pluginLWC = require("lwc-webpack-plugin");

module.exports = {
  output: {
    path: require("path").resolve(__dirname, "build"),
  },
  plugins: [
    new pluginLWC(),
    {
      apply(compiler) {
        compiler.options.module.rules.push({
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-typescript"],
              plugins: [["@babel/plugin-syntax-decorators", { legacy: true }]],
            },
          },
        });
      },
    },
  ],
};
