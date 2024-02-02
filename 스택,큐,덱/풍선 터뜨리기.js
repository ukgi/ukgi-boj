// 2346 요세푸스랑 유사
let [n, arr] = require('fs').readFileSync('./input.txt').toString().split('\n');
n = Number(n);
arr = arr.split(' ').map(Number);

function solution(n, input) {
  let result = '';
  const deque = Array.from({ length: n }, (_, i) => i + 1);
  while (deque.length) {
    const ballNum = deque[0];
    const cnt = input[deque[0] - 1];
    result += ballNum + ' ';
    deque.shift();
    if (deque.length === 0) return result;
    if (cnt > 0) {
      for (let i = 0; i < cnt - 1; i++) {
        deque.push(deque[0]);
        deque.shift();
      }
    } else {
      for (let i = cnt; i < 0; i++) {
        deque.unshift(deque[deque.length - 1]);
        deque.pop();
      }
    }
  }

  return result;
}

console.log(solution(n, arr)); // 1 4 5 3 2
