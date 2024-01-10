const input = Number(require('fs').readFileSync(0).toString());

function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n - 1; i + 1) {
    sum += i;
  }

  return sum;
}

console.log(solution(input));
console.log(2);
