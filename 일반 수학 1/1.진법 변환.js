/*
1️⃣

const input = require('fs').readFileSync(0).toString().trim().split(' ');
const n = input[0];
const b = Number(input[1]);

const result = parseInt(n, b);
console.log(result);

*/

/*
2️⃣

const input = require('fs').readFileSync('./input.txt').toString().trim().split(' ');
const n = input[0].split('').reverse();
const b = Number(input[1]);

const result = [...n].reduce((acc, char, i) => {
  if (char >= 'A' && char <= 'Z') {
    const charNum = char.charCodeAt() - 55;

    return acc + charNum * b ** i;
  } else {
    const num = Number(char);

    return acc + num * b ** i;
  }
}, 0);

console.log(result);
*/
