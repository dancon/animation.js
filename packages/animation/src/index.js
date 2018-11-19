/**
 * @fileoverview A lightweight animation javascript libaray based on requestAnimationFrame
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-11-16 | sizhao     // initial version
 */

import animationFram from 'packages/animationFram'
import easing from 'packages/easing'

class Animation {
  
}

export Animation

export default (...args) => {
  if(args.length < 1){
    throw new Error('[Animation Exception]: No arguments.')
  }else{
    let options = {}
    options = args.length === 1 ? args.pop() : Object.assign(options, {
      duration: args[0],
      onStep: args[1],
      easing: args[2],
      onComplete: args[3]
    })

    return new Animation(options)
  }
}