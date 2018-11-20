/**
 * @fileoverview webpack config for easing
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-11-16 | sizhao     // initial version
 */

const baseConfig = require('../../scripts/webpack.config.base')
const merge = require('webpack-merge')

const name = 'easing'
module.exports = merge(baseConfig, {
  name,
  context: __dirname,
  output: {
    path: `${__dirname}/lib`,
    library: name
  }
})
