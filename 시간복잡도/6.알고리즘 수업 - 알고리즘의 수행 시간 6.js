const input = Number(require('fs').readFileSync('./input.txt').toString());
const num = BigInt(input);

function solution(tmp) {
  return `${((tmp - BigInt(2)) * (tmp - BigInt(1)) * tmp) / BigInt(6)}`;
}

console.log(solution(num));
console.log(3);
