const input = require('fs').readFileSync(0).toString().split('\n').map(Number);
const max = input.reduce((acc, cur) => {
  return Math.max(acc, cur);
}, -Infinity);

console.log(max);
console.log(input.findIndex((ele) => ele === max) + 1);
