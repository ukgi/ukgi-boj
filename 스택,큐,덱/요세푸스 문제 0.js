// 11866
const [n, k] = require('fs').readFileSync('./input.txt').toString().split(' ').map(Number);

function solution(n, k) {
  const result = [];
  const queue = Array.from({ length: n }, (_, i) => i + 1);

  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    result.push(queue.shift());
  }

  return `<${result.join(', ')}>`;
}

console.log(solution(n, k));
