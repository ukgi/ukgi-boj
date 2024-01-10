const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(Number);

function solution(input) {
  if (input.every((angle) => angle === 60)) {
    return console.log('Equilateral');
  }
  const sumAngle = input.reduce((sum, cur) => sum + cur, 0);
  if (sumAngle !== 180) {
    return console.log('Error');
  }

  if (new Set(input).size === input.length) {
    return console.log('Scalene');
  }

  return console.log('Isosceles');
}

solution(input);
