// 25501
let [t, ...s] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
s = s.map((e) => e.trim());

function solution(s) {
  const result = [];
  let cnt;
  function DFS(s, l, r) {
    cnt++;
    if (l >= r) return [1, cnt];
    else if (s[l] !== s[r]) return [0, cnt];
    else {
      return DFS(s, l + 1, r - 1);
    }
  }
  s.forEach((e) => {
    cnt = 0;
    result.push(DFS(e, 0, e.length - 1));
  });
  return result.map((e) => e.join(' ')).join('\n');
}

console.log(solution(s));
