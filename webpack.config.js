const path =  require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin'); 

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '/.dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Webpack Setup',
        filename: 'index.html',
        template: './src/index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};