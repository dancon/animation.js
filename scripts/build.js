/**
 * @fileoverview build scripts
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-11-16 | sizhao     // initial version
 */

const path = require('path')
const webpack = require('webpack')
const log = require('fancy-log')
const color = require('ansi-colors')
const del = require('del')

const error = (...messages) => {
  log(color.red(messages.join(' ')))
}

const warn = (...messages) => {
  log(color.yellow(messages.join(' ')))
}

module.exports = (config = {}) => {
  const { name } = config
  return new Promise((resolve, reject) => {
    return del([ `packages/${name}/lib/**` ], {
      cwd: path.resolve(__dirname, '../')
    }).then(() => {
      log(`Start building library ${color.green(name)} ...`)
      webpack(config).run((err, stats) => {
        if (err) {
          error(`Build ${color.green(name)} failer with fatal webpack errors: \n`)
          error(error.stack || error)
          if (error.details) {
            error(error.details)
          }
          return reject(error)
        }

        const info = stats.toJson()
        if (stats.hasErrors()) {
          log(`Build ${color.green(name)} failer with compilation errors: \n`)
          error(info.errors)
        }

        if (stats.hasWarnings()) {
          log(`Build ${color.green(name)} with compilation warnings: \n`)
          warn(info.warnings)
        }

        // log(stats.toString(config.stats))
        log(`build library ${color.green(name)} finished.`)
        return resolve()
      })
    })
  })
}
