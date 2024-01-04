/* 입력 정제 코드 */
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = parseInt(input[0], 10);
const b = input[1];

/* 풀이 로직 */
function solution(a, b) {
  for (let i = b.length - 1; i >= 0; i--) {
    console.log(a * parseInt(b[i], 10));
  }

  console.log(a * parseInt(b, 10));
}

solution(a, b);
