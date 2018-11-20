/**
 * @fileoverview requestAnimationFrame 兼容库
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-11-16 | sizhao         // initial version
 */

const w = window
const animationFrame = {}

const screenRepaintInterval = 1000/60
const isDHRTSSuport = w.performance && typeof w.performance.now === 'function'
const initTimestamp = Date.now()

animationFrame.raf = w.requestAnimationFrame || w.webkitRequestAnimationFrame
animationFrame.caf = w.cancelAnimationFrame || w.webkitCancelAnimationFrame || w.webkitCancelRequestAnimationFrame

function highResTimestamp () {
  if (isDHRTSSuport) {
    return w.performance.now()
  }
  return Date.now() - initTimestamp
}

if (!animationFrame.raf) {
  animationFrame.raf = (callback = () => {}) => {
    return setTimeout(() => {
      callback(highResTimestamp())
    }, screenRepaintInterval)
  }
}

if (!animationFrame.caf) {
  animationFrame.caf = (requestId) => {
    clearTimeout(requestId)
  }
}

export default {
  raf (callback) {
    animationFrame.raf.call(w, callback)
  },
  caf (requestId) {
    animationFrame.caf.call(w, requestId)
  },
  highResTimestamp
}