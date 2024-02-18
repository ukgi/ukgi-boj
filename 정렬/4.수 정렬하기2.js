// 2751
let [n, ...arr] = require('fs').readFileSync(0).toString().trim().split('\n');

function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr.join('\n');
}

console.log(solution(arr));
