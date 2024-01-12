// 최소 봉지의 갯수 구하기
const n = Number(require('fs').readFileSync(0).toString().trim());

function solution(n) {
  const tmp = [];
  for (let i = 0; i <= parseInt(n / 5); i += 1) {
    for (let j = 0; j <= parseInt(n / 3); j += 1) {
      if (5 * i + 3 * j === n) {
        tmp.push(i + j);
      }
    }
  }

  return tmp.length === 0 ? -1 : Math.min(...tmp);
}

console.log(solution(n));
