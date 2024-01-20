// 3968
let [n, ...arr] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
arr = arr.map((s) => s.trim());

function solution(arr) {
  let result = 0;
  arr.forEach((s) => {
    const stack = [];
    for (const c of s) {
      if (c === 'A' && stack[stack.length - 1] === 'A') stack.pop();
      else if (c === 'B' && stack[stack.length - 1] === 'B') stack.pop();
      else stack.push(c);
    }

    if (stack.length === 0) result++;
  });

  return result;
}

console.log(solution(arr));
