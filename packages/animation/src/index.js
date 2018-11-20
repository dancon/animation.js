/**
 * @fileoverview A lightweight animation javascript libaray based on requestAnimationFrame
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-11-16 | sizhao     // initial version
 */

import animationFram from 'packages/animationFrame'
import tween from 'packages/easing'

function isFunction (func) {
  return typeof func === 'function'
}

const DEFAULT = {
  duration: 400,
  delay: 0,
  easing: tween.easeOutQuad,
  onStart: () => {},
  onStep: () => {},
  onComplete: () => {}
}

const ANIMATIONSTATE = {
  PLAYING: 'playing',
  PAUSED: 'paused',
  STOPED: 'stoped'
}
class Animation {
  constructor ({
    duration = DEFAULT.duration,
    delay = DEFAULT.delay,
    easing = DEFAULT.easing,
    onStart = DEFAULT.onStart,
    onStep = DEFAULT.onStep,
    onComplete = DEFAULT.onComplete
  } = DEFAULT) {
    // optional params
    this.duration = isNaN(parseInt(duration)) ? DEFAULT.duration : duration
    this.delay = isNaN(parseInt(delay)) ? DEFAULT.delay : delay
    this.easing = isFunction(easing) ? easing : isFunction(tween[easing]) ? tween[easing] : DEFAULT.easing
    this.onStart = isFunction(onStart) ? onStart : DEFAULT.onStart
    this.onStep = isFunction(onStep) ? onStep : DEFAULT.onStep
    this.onComplete = isFunction(onComplete) ? onComplete : DEFAULT.onComplete

    // internal state
    this._reset()

    // requestAnimationFrame id
    this.rafid = null

    this.resume()
  }

  // force to finish the animation
  stop () {
    this._reset()
    animationFram.caf(this.rafid)
    this.onComplete(1)
  }

  pause () {
    if (this.aniState === ANIMATIONSTATE.PLAYING) {
      this.aniState = ANIMATIONSTATE.PAUSED
      this.elapsedTime = this.curDuration

      animationFram.caf(this.rafid)
      return this.progress
    }
  }

  resume () {
    // if animation is playing, there will do nothing
    if (!this.aniState !== ANIMATIONSTATE.PLAYING) {
      this.aniState = ANIMATIONSTATE.PLAYING
      const startTick = animationFram.highResTimestamp()
      if (this.elapsedTime > 0) {
        this.delay = 0
      }

      const aniRoll = (tick) => {
        const _interval = tick - startTick
        const { onStart, onStep, onComplete } = this
        if (_interval >= this.delay) {
          if (!this.aniStated) {
            this.aniStated = true
            onStart(0)
            onStep(0)
          } else {
            this.curDuration = this.elapsedTime + _interval - this.delay
            if (this.curDuration < this.duration) {
              this.progress = this.easing(this.curDuration, 0, 1, this.duration)
              onStep(this.progress)
            }
          }
        }

        if (this.curDuration < this.duration) {
          this.rafid = animationFram.raf(aniRoll)
        } else {
          if (this.progress < 1) {
            this.progress = 1
            onStep(1)
          }
          this._reset()
          onComplete(1)
        }
      }

      aniRoll(startTick)
    }
  }

  _reset () {
    this.elapsedTime = 0
    this.curDuration = 0
    this.aniStated = false
    this.progress = 0
    this.aniState = ANIMATIONSTATE.STOPED
  }
}

export { Animation }

export default (...args) => {
  if (args.length < 1) {
    throw new Error('[Animation Exception]: No arguments.')
  } else {
    let options = {}
    options = args.length === 1 ? args.pop() : Object.assign(options, {
      duration: args[0],
      onStep: args[1],
      onComplete: args[2],
      easing: args[3]
    })

    return new Animation(options)
  }
}
