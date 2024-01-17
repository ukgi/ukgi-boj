let [n, ...test] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

n = Number(n);
test = test.map((t) => t.split(' ').map(Number));
console.log(test);

function solution(n, arr) {
  for (let i = 0; i < n; i++) {}
}
