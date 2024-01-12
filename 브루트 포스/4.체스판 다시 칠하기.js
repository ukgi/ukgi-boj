// ❌

const [a, ...b] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const [n, m] = a.split(' ').map(Number);
const arr = b.map((x) => x.trim().split(''));

function solution(n, m, arr) {
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n - 7; i += 1) {
    for (let j = 0; j < m - 7; j += 1) {
      for (let k = i; k < i + 8; k += 1) {
        const copy = arr;
        let count = 0;
        for (let h = j; h < j + 8; h += 1) {
          if (copy[k][h] === copy[k][h + 1]) {
            copy[k][h] === 'B' ? (copy[k][h + 1] = 'W') : (copy[k][h + 1] = 'B');
            count += 1;
          }
        }

        result = Math.min(result, count);
      }
    }
  }

  return result;
}

console.log(solution(n, m, arr));
