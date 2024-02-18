let [n, b] = require('fs').readFileSync('./input.txt').toString().trim().split(' ');
b = Number(b);

function solution(n, b) {
  return parseInt(n, 10).toString(b).toUpperCase();
}

console.log(solution(n, b));
