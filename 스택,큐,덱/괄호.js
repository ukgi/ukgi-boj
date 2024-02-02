// 9012번
let [n, ...tests] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
tests = tests.map((t) => t.trim());

function solution(arr) {
  arr.forEach((c) => {
    let result = 'YES';
    const stack = [];
    for (const x of c) {
      if (x === ')') {
        if (stack.length === 0) result = 'NO';
        else stack.pop();
      } else {
        stack.push(x);
      }
    }
    if (stack.length !== 0) result = 'NO';
    console.log(result);
  });
}

solution(tests);
