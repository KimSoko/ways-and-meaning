/* eslint-disable no-undef */
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: './',
//     hot: true
//  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  plugins: [new ESLintPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 2
      })
    ]
  },
  resolve: {
    fallback: {
       "querystring": require.resolve("querystring-es3")
    },
    alias: {
        path: require.resolve("path-browserify")
    }
}
};
