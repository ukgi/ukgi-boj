const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

function solution(year) {
  if (year % 4 !== 0) {
    return console.log(0);
  }

  if (year % 100 === 0 && year % 400 !== 0) {
    return console.log(0);
  }

  return console.log(1);
}

solution(input);
