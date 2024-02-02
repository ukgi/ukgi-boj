/**
 * 4949
 * 괄호들의 균형이 잘 맞춰져 있는지 판단하는 프로그램
 */
let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    const stack = [];
    let answer = 'yes';
    if (arr[i] === '.') break;
    for (const c of arr[i]) {
      if (c === '(' || c === '[') stack.push(c);
      else {
        if (c === ')') {
          if (stack[stack.length - 1] !== '(') {
            answer = 'no';
            break;
          } else stack.pop();
        } else if (c === ']') {
          if (stack[stack.length - 1] !== '[') {
            answer = 'no';
            break;
          } else stack.pop();
        }
      }
    }
    console.log(answer);
  }
}

solution(input);
