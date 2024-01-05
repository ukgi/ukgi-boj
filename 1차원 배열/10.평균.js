const input = require('fs').readFileSync(0).toString().trim().split('\n');
const count = Number(input[0]);
const scores = input[1].split(' ').map(Number);

const maxScore = Math.max(...scores);
const sum = scores.reduce((acc, cur) => {
  return acc + (cur / maxScore) * 100;
}, 0);
const average = sum / count;

console.log(average);
