# animation.js

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A light weight Javascript animation library based on requestAnimationFrame.

## Introduce

This repostory contain three packages:

- animation: A very small and simple but powerful animation javascript library. For more detail please read [animation doc](packages/animation/README.md)

- animationFrame: A requestAnimationFrame and cancelAnimationFrame compatible javascript library which provide base support for the `animation`, meanwhile, I provide a method to polyfill  `window.performance.now()`. For more detail please read [animationFrame doc](packages/animationframe/README.md)

- easing: A bag of ease equations. For more detail please read [easing doc](packages/easing/README.md)

## Contribute

Please feel free to create an issue if there are any problems.

## License

MIT