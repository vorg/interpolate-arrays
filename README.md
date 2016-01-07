# interpolate-arrays

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Linear interpolation between multiple arrays

```js
var interpolateArrays = require('interpolate-arrays')

var red   = [255, 0, 0]
var green = [0, 255, 0]
var blue  = [0, 0, 255]

var yellow = interpolateArrays([red, green, blue], 0.25); //-> [ 127.5, 127.5, 0 ]
```

## Usage

[![NPM](https://nodei.co/npm/interpolate-arrays.png)](https://www.npmjs.com/package/interpolate-arrays)

#### `interpolateArrays(arraysList, t)`

Linearly interpolates between all arrays in the `arraysList` using the `t` component.

## License

MIT, see [LICENSE.md](http://github.com/vorg/interpolate-arrays/blob/master/LICENSE.md) for details.
