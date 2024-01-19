const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  context: process.cwd(),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'monitor.js',
    libraryTarget: 'umd',
    library: 'FrontMonitorSdk',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'] // 可以使用.babelrc文件替代
        }
      }
    ]
  }
}