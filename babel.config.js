/**
 * @fileoverview babel-config
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-11-16 | sizhao     // initial version
 */

module.exports = function () {
  const presets = [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      modules: false
    }]
  ]

  const plugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-json-strings'
  ]
  return {
    presets,
    plugins
  }
}