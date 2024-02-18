//10870
let n = Number(require('fs').readFileSync('./input.txt').toString());

function solution(num) {
  if (num < 2) return num;
  else {
    return solution(num - 1) + solution(num - 2);
  }
}

console.log(solution(45));
