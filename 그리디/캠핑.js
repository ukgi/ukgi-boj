//4796
let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
input = input.map((e) => e.split(' ')).map((e) => e.map(Number));

function solution(input) {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const [l, p, v] = input[i];
    if (l === 0 && p === 0 && v === 0) break;
    let cnt = 0;
    const a = Math.floor(v / p);
    cnt += a * l;
    if (v % p >= l) cnt += l;
    else cnt += v % p;
    result.push(cnt);
  }
  return result.map((cnt, i) => `Case ${i + 1}: ${cnt}`).join('\n');
}

console.log(solution(input));
