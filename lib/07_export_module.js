"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function sum(x, y) {
    return x + y;
}

function avg(arrNums) {
    var result = 0;
    arrNums.map(function (i) {
        return result += i;
    });

    return result / arrNums.length;
}

exports.sum = sum;
exports.avg = avg;