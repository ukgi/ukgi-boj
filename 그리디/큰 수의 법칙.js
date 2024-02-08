// 이코테 그리디 문제 2
let [a, b] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
a = a.split(' ').map(Number);
b = b.split(' ').map(Number);

function solution(a, b) {
  let sum = 0;
  let [n, m, k] = a;
  b.sort((a, b) => b - a);
  while (m) {
    for (let i = 0; i < k; i++) {
      if (m === 0) return sum;
      sum += b[0];
      m--;
    }
    sum += b[1];
    m--;
  }
  return sum;
}

console.log(solution(a, b)); // 46
