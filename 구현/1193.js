const input = Number(require('fs').readFileSync('./input.txt').toString().trim());

function solution(x) {
  let end = 1;
  let range = 1;
  while (end < x) {
    end += range + 1;
    range++;
  }
  let a = range - (end - x);
  if (range % 2 === 0) {
    return `${a}/${range - a + 1}`;
  }
  return `${range - a + 1}/${a}`;
}

console.log(solution(input));
