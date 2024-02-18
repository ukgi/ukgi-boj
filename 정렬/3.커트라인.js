// 25305
let [a, b] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const k = Number(a.split(' ')[1]);
const scores = b.split(' ').map(Number);

function solution(scores, k) {
  scores.sort((a, b) => b - a);
  return scores[k - 1];
}

console.log(solution(scores, k));
