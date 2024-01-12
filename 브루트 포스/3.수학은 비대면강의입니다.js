const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ').map(Number);

function solution(input) {
  let result;
  const [a, b, c, d, e, f] = input;
  for (let x = -999; x <= 999; x += 1) {
    for (let y = -999; y <= 999; y += 1) {
      if (a * x + b * y === c && d * x + e * y === f) {
        result = [x, y];
        break;
      }
    }
    if (result) break;
  }

  return result.join(' ');
}

console.log(solution(input));
