/* 입력 정제 코드 */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

/* 풀이 로직 */
function solution(input) {
  const wowText = '??!';
  console.log(input + wowText);
}

solution(input);
