let input = require('fs').readFileSync('./input.txt').toString().trim();

function solution(input) {
  const result = [...input].map(Number).sort((a, b) => b - a);
  return result.join('');
}

console.log(solution(input));
