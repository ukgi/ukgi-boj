// 2839
const n = Number(require('fs').readFileSync('./input.txt').toString().trim());
function solution(n) {
  let cnt = Math.floor(n / 5);
  if (n % 5 !== 0) {
    while (cnt >= 0) {
      if ((n - 5 * cnt) % 3 === 0) {
        cnt += (n - 5 * cnt) / 3;
        break;
      }
      cnt--;
    }
  }
  return cnt;
}

console.log(solution(n));
