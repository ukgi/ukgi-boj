//27433
let n = Number(require('fs').readFileSync('./input.txt').toString());

function solution(num) {
  function DFS(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * DFS(n - 1);
    }
  }
  return DFS(num);
}

console.log(solution(n));
