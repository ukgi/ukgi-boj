// 24511
let [n, a, b, m, c] = require('fs').readFileSync('./input.txt').toString().split('\n');
n = Number(n);
a = a.split(' ').map(Number); // 큐 : 0, 스택 : 1
b = b.split(' ').map(Number); // 초기값
m = Number(m);
c = c.split(' ').map(Number); // 수열

function solution(a, b, c) {
  const result = [];
  for (let i = 0; i < c.length; i++) {
    let temp = c[i];
    for (let j = 0; j < b.length; j++) {
      if (a[j] === 0) {
        const t = b[j];
        b[j] = temp;
        temp = t;
      }
    }
    result.push(temp);
  }

  return result.join(' ');
}

console.log(solution(a, b, c));
