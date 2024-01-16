// 🔺
const n = Number(require('fs').readFileSync('./input.txt').toString());

function solution(n) {
  let ranking = 1;
  let tmp = 666;

  while (ranking !== n) {
    tmp += 1;
    if (`${tmp}`.includes('666')) ranking += 1;
  }

  return tmp;
}

console.log(solution(n));
