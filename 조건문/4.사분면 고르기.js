const input = require('fs').readFileSync(0).toString().split('\n');

const x = parseInt(input[0], 10);
const y = parseInt(input[1], 10);

function solution(x, y) {
  if (x > 0 && y > 0) {
    return console.log(1);
  }
  if (x < 0 && y > 0) {
    console.log(2);
  }
  if (x < 0 && y < 0) {
    console.log(3);
  }
  if (x > 0 && y < 0) {
    console.log(4);
  }
}

solution(x, y);
