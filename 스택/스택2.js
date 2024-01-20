// 28278
let [n, ...arr] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
arr = arr.map((n) => n.trim());
const stack = [];
const result = [];

for (let i = 0; i < arr.length; i++) {
  switch (arr[i]) {
    case '2':
      if (stack[stack.length - 1]) {
        result.push(stack.pop());
      } else {
        result.push(-1);
      }
      break;

    case '3':
      result.push(stack.length);
      break;

    case '4':
      result.push(stack.length === 0 ? 1 : 0);
      break;

    case '5':
      result.push(stack[stack.length - 1] ? stack[stack.length - 1] : -1);
      break;

    default:
      const [command, x] = arr[i].split(' ');
      stack.push(x);
      break;
  }
}

console.log(result.join('\n'));
