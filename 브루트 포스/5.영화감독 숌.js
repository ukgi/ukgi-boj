// 🔺
const n = Number(require('fs').readFileSync('./input.txt').toString());

function solution(n) {
  let x = 666;
  let result = 0;
  let r = 0;
  while (r !== n) {
    if (x.toString().includes('666')) {
      r++;
      result = x;
    }
    x++;
  }

  return result;
}

console.log(solution(n));
