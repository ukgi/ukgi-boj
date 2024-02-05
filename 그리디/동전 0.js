// 11047
let [a, ...b] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
a = a.split(' ').map(Number);
let arr = b.map(Number);
let k = a[1];

function solution(k, arr) {
  let result = 0;
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      result += Math.floor(k / arr[i]);
      k -= arr[i] * Math.floor(k / arr[i]);
    }
    if (k === 0) break;
  }
  return result;
}

console.log(solution(k, arr));
