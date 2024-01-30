/*
10773
0을 만나면 스택을 pop
그 외 숫자는 스택에 push
그리고 reduce를 사용해 totalSum 반환
*/

let [k, ...arr] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
arr = arr.map(Number);

function solution(arr) {
  const stack = [];
  arr.forEach((n) => {
    if (n === 0) stack.pop();
    else stack.push(n);
  });
  const sum = stack.reduce((acc, cur) => acc + cur, 0);

  return sum;
}

console.log(solution(arr));
