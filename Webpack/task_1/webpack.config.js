const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./js/dashboard_main.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Your source HTML
      filename: "index.html", // Output filename in the `public` folder
    }),
  ],
  mode: "production",
};
