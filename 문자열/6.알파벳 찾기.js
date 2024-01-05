const input = require('fs').readFileSync(0).toString().trim();
const result = [];
const list = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

list.forEach((alphabet) => {
  result.push(input.indexOf(alphabet));
});

console.log(result.join(' '));
