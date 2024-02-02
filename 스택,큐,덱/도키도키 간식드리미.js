// 12789
let [n, input] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
input = input.split(' ').map(Number);

function solution(arr) {
  const t = [...arr].sort((a, b) => a - b);
  let pos = 0;
  let result = 'Nice';
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t[pos]) {
      pos++;
      while (stack.length) {
        if (stack[stack.length - 1] !== t[pos]) break;
        else {
          stack.pop();
          pos++;
        }
      }
    } else stack.push(arr[i]);
  }
  if (stack.length !== 0) result = 'Sad';
  return result;
}

console.log(solution(input));
