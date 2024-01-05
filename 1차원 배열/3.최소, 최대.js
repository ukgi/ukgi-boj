const input = require('fs').readFileSync(0).toString().split('\n');
const cases = input[1].split(' ').map(Number);

const max = cases.reduce((acc, cur) => {
  return Math.max(acc, cur);
}, -Infinity);

const min = cases.reduce((acc, cur) => {
  return Math.min(acc, cur);
}, Infinity);

console.log(min, max);
