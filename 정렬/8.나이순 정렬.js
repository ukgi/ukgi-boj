// 10814
// sort메서드도 stable하다.
// parseInt와 parseFloat은 문자열에서 정수만 반환해준다.
let [n, ...members] = require('fs').readFileSync(0).toString().trim().split('\n');
members = members.map((e) => e.trim().split(' '));

function solution(members) {
  members.sort((a, b) => parseInt(a) - parseInt(b));
  return members.map((e) => e.join(' ')).join('\n');
}

console.log(solution(members));
