
exports.min = function min (array) {
    if (arguments.length === 0 || array.length == 0) return 0;
    let minValue = array[0];
    for (el of array) {
        if (el < minValue) minValue = el;
    }
    return minValue;
}

exports.max = function max (array) {
    if (arguments.length === 0 || array.length == 0) return 0;
    let maxValue = array[0];
    for (el of array) {
        if (el > maxValue) maxValue = el;
    }
    return maxValue;
}

exports.avg = function avg (array) {
    if (arguments.length === 0 || array.length == 0) return 0;

    return array.reduce(((sum, el) => sum + el), 0) / array.length;
}
