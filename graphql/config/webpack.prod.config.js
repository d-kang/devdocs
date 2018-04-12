const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  // optimization: {
  //   namedModules: true, // NamedModulesPlugin()
  //   splitChunks: {
  //     // CommonsChunkPlugin()
  //     name: 'vendor',
  //     minChunks: 2,
  //   },
  //   noEmitOnErrors: true, // NoEmitOnErrorsPlugin
  //   concatenateModules: true, // ModuleConcatenationPlugin
  // },

  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    port: 3001,
    historyApiFallback: true,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      title: '',
      template: 'index.ejs',
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
};
