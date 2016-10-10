import { sum, avg } from './07_export_module.js';

const callSum = sum(5, 10);
console.log(callSum);

const callAvg = avg([1, 2, 3, 4, 5]);
console.log(callAvg);
