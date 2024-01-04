const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

function solution(score) {
  if (score >= 90 && score <= 100) {
    return console.log('A');
  }
  if (score >= 80 && score <= 89) {
    return console.log('B');
  }
  if (score >= 70 && score <= 79) {
    return console.log('C');
  }
  if (score >= 60 && score <= 69) {
    return console.log('D');
  }

  return console.log('F');
}

solution(input);
