// 11399
let [n, p] = require('fs').readFileSync('./input.txt').toString().split('\n');
p = p.split(' ').map(Number);

function solution(p) {
  const result = [];
  p.sort((a, b) => a - b);
  let temp = 0;
  for (let i = 0; i < p.length; i++) {
    temp += p[i];
    result.push(temp);
  }
  return result.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(p));
