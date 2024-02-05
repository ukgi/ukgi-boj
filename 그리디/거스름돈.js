// 5585
let input = Number(require('fs').readFileSync('./input.txt').toString());

function solution(n) {
  const m = [500, 100, 50, 10, 5, 1];
  let result = 0;
  for (let i = 0; i < m.length; i++) {
    if (n >= m[i]) {
      const c = Math.floor(n / m[i]);
      result += c;
      n = n % m[i];
    }
    if (n === 0) break;
  }
  return result;
}

console.log(solution(1000 - input));
