/*
1. 전달받은 각각의 문자를 파악한다.
2. 문자에 해당하는 숫자를 매칭시킨다.
3. 숫자마다 걸리는 시간을 계산한다.
*/

const input = require('fs').readFileSync(0).toString().trim();
let sum = 0;

function matchToNumber(input) {
  if (input === 'A' || input === 'B' || input === 'C') {
    return 2;
  }
  if (input === 'D' || input === 'E' || input === 'F') {
    return 3;
  }
  if (input === 'G' || input === 'H' || input === 'I') {
    return 4;
  }
  if (input === 'J' || input === 'K' || input === 'L') {
    return 5;
  }
  if (input === 'M' || input === 'N' || input === 'O') {
    return 6;
  }
  if (input === 'P' || input === 'Q' || input === 'R' || input === 'S') {
    return 7;
  }
  if (input === 'T' || input === 'U' || input === 'V') {
    return 8;
  }
  if (input === 'W' || input === 'X' || input === 'Y' || input === 'Z') {
    return 9;
  }
}

function calculateTime(input) {
  return input + 1;
}

for (char of input) {
  const num = matchToNumber(char);
  const time = calculateTime(num);
  sum += time;
}

console.log(sum);
