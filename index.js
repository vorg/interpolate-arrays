var lerp = require('lerp-array');

function copyArrayTo(array, out) {
    for (let i = 0; i < array.length; i++) {
        out[i] = array[i]
    }
    return out
}

function interpolateArrays(arrays, t, out) {
    if (t >= 1) {
        const lastItem = arrays[arrays.length - 1];
        return out ? copyArrayTo(lastItem, out) : lastItem
    }
    if (arrays.length == 1) {
        const firstItem = arrays[0]
        return out ? copyArrayTo(firstItem, out) : firstItem;
    }
    var numStops = arrays.length - 1;
    var stopF = t * numStops;
    var stop = Math.floor(stopF);
    var k = stopF - stop;
    return lerp(arrays[stop], arrays[stop+1], k, out);
}

module.exports = interpolateArrays;
