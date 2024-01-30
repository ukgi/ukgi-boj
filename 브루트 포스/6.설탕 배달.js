// 최소 봉지의 갯수 구하기
const n = Number(require('fs').readFileSync('./input.txt').toString().trim());

function solution(n) {
  const result = [];
  for (let i = 0; i <= parseInt(n / 5); i++) {
    for (let j = 0; j <= parseInt(n / 3); j++) {
      if (i * 5 + j * 3 === n) result.push(i + j);
    }
  }

  return result.length === 0 ? -1 : Math.min(...result);
}

console.log(solution(n));
