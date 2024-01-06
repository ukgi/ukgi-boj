let input = require('fs').readFileSync('./input.txt').toString().trim();
input = input.toUpperCase();
let result = '';
let tmp = 0;

const counter = {};
for (char of input) {
  if (counter[char]) {
    counter[char] += 1;
  } else {
    counter[char] = 1;
  }
}
const maxCount = Math.max(...Object.values(counter));

Object.entries(counter).forEach(([char, count]) => {
  if (count === maxCount) {
    tmp += 1;
    result = char;
  }
});

if (tmp > 1) {
  return console.log('?');
}

return console.log(result);
