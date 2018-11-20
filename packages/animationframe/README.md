# animationFrame

A requestAnimationFrame and cancelAnimationFrame compatible javascript library which provide base support for the `animation`.

## Usage

### ES6 and beyond

```javascript
  import animationFrame from '@pandolajs/animationframe'

  const { raf, caf, highResTimestamp } = animationFrame

  // raf: requestAnimationFrame
  // caf: cancelAnimationFrame
  // highResTimestamp
```

### UMD

```html
  <script src="https://path.to.animationframe" />
  <script>
    window.animationFrame.raf()
    window.animationFrame.caf()
    window.animationFrame.highResTimestamp()
  </script>
```

### APIs

{
  raf: Function | window.requestAnimationFrame
  caf: Function | window.cancelAnimationFrame
  highResTimestamp: Function | window.performance.now()
}
