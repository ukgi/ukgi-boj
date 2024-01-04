/* 입력 정제 코드 */
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
input = Number(input);

/* 풀이 로직 */
function solution(input) {
  console.log(input - 543);
}

solution(input);
