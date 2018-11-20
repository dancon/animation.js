/**
 * @fileoverview husky
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-11-16 | sizhao     // initial version
 */

const path = require('path')

const root = path.resolve(__dirname, '../')
const packagesPath = path.join(root, 'packages')

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      packages: packagesPath
    },
    aliasFields: [ 'module' ],
    mainFields: [ 'module', 'main' ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [ packagesPath ],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  stats: {
    colors: true,
    reasons: true,
    hash: false,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false
  }
}
