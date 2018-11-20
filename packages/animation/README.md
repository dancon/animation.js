# Animation

A very small and simple but powerful animation javascript library.

## Usage

- ES6 and beyond

```javascript

// common use
import animation from '@pandolajs/animation'

const ele = document.querySelector('#test')

animation(400, (progress) => {
  ele.style.width = `${200 * progress}px`
}, () => {
  ele.style.width = '200px'
}, 'linear')

// with more options
import { Animation } from '@pandolajs/animation'

const ani = new Animation({
  duration: 400,
  delay: 0,
  easing: 'easeOutQuad',
  onStart () {
    // when animation is start
  },
  onStep (progress) {
    // progress is value between 0 and 1 computed by ease function
    // do something with progress
  },
  onComplete () {
    // do something when animation is finished.
  }
})
```

## APIs

### common usage

- `animation(duration, onStep, onComplete, easing)`

  - @param `duration` | Number | default: 400ms | Specifies the time of animation execution in milliseconds
  - @param `onStep` | Function | default: () => {} | the callback when animation is in process, and is executed with a value between 0 and 1 as the only parameter that indicate the progress of the animation.
  - @param `onComplete` | Function | default: () => {} | the callback when animation is completed.
  - @param `easing` | Function or String | default: 'easeOutQuad' | specify the ease method of animation. More available value can be found [here](../easing/README.md)

  - @return this method will return a `Animation` instance.

### Class Animation

- `constructor(options)`

  - @param options.duration
  - @param options.delay
  - @param options.easing
  - @param options.onStart
  - @param options.onStep
  - @param options.onComplete

- `stop()` force stop the animation.

- `pause()` pause the animation.

- `resume` resume the animation.
