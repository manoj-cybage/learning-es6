'use strict';

var _export_module = require('./07_export_module.js');

var callSum = (0, _export_module.sum)(5, 10);
console.log(callSum);

var callAvg = (0, _export_module.avg)([1, 2, 3, 4, 5]);
console.log(callAvg);