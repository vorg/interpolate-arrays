var lerp = require('lerp-array');

function interpolateArrays(arrays, t, out) {
    if (t >= 1) {
        return arrays[arrays.length - 1];
    }
    if (arrays.length == 1) {
        return arrays[0];
    }
    var numStops = arrays.length - 1;
    var stopF = t * numStops;
    var stop = Math.floor(stopF);
    var k = stopF - stop;
    return lerp(arrays[stop], arrays[stop+1], k, out);
}

module.exports = interpolateArrays;
