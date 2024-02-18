let [n, b] = require('fs').readFileSync('./input.txt').toString().trim().split(' ');
b = Number(b);

function solution(n, b) {
  return parseInt(n, b).toString(10);
}

console.log(solution(n, b));
