/**
 * @fileoverview build scripts
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-11-16 | sizhao     // initial version
 */

const gulp = require('gulp')
const runSequence = require('run-sequence')

const build = require('./build')

gulp.task('build:animation', () => {
  const animationConfig = require('../packages/animation/webpack.config')
  return build(animationConfig)
})

gulp.task('build:animationFrame', () => {
  const animationFrameConfig = require('../packages/animationFrame/webpack.config')
  return build(animationFrameConfig)
})

gulp.task('build:easing', () => {
  const easingConfig = require('../packages/easing/webpack.config')
  return build(easingConfig)
})

gulp.task('default', (done) => {
  runSequence(
    'build:animation',
    'build:animationFrame',
    'build:easing',
    done
  )
})
