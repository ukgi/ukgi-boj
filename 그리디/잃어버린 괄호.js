let input = require('fs').readFileSync('./input.txt').toString().trim();

function solution(input) {
  const numbers = input.split('-').map((e) =>
    e
      .split('+')
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0)
  );
  const answer = numbers[0] * 2 - numbers.reduce((s, v) => s + v, 0);
  return answer;
}

console.log(solution(input));
