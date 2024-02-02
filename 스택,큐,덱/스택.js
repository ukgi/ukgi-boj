let array = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const stack = [];
const result = [];
const len = array.shift();
array = array.map((a) => a.trim());

for (let i = 0; i < len; i++) {
  switch (array[i]) {
    case 'pop':
      result.push(stack.length === 0 ? -1 : stack.pop());
      break;

    case 'size':
      result.push(stack.length);
      break;

    case 'empty':
      result.push(stack.length === 0 ? 1 : 0);
      break;

    case 'top':
      result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
      break;

    default:
      let [command, x] = array[i].split(' ');
      x = Number(x);
      stack.push(x);
      break;
  }
}

console.log(result.join('\n'));
