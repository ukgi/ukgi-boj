const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

function solution(a, b) {
  return a === b ? console.log('==') : a > b ? console.log('>') : console.log('<');
}

solution(a, b);
