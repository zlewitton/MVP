const path = require('path');
const webpack = require('webpack');

const config = {

  entry: path.join(__dirname, '/Client/Src/app.jsx'),
  output: {
    path: path.join(__dirname, '/Client/Dist'),
    filename: "bundle.js",
  },

  mode: "developlemt",

  module: {
    rules: [
      {test: /\.js|jsx$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader",
      },
      {
        test: /\.css$/,
        loader: "css-loader",
      },
    ]
  },

  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
}

module.exports = config;