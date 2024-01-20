// 12605
let [n, ...tests] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
tests = tests.map((x) => x.trim());

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let result = '';
    const stack = [];
    const tmp = arr[i].split(' ');
    for (let j = 0; j < tmp.length; j++) {
      stack.push(tmp[j]);
      stack.push(' ');
    }
    while (stack.length !== 0) {
      result += stack.pop();
    }

    console.log(`Case #${i + 1}: ${result.trim()}`);
  }
}

solution(tests);
