let input = require('fs').readFileSync('./input.txt').toString().trim();

function solution(input) {
  const temp = input.split('-').map((e) => e.split('+').reduce((acc, cur) => acc + Number(cur), 0));
  return temp.reduce((acc, cur) => acc - cur, temp[0] * 2);
}

console.log(solution(input));
