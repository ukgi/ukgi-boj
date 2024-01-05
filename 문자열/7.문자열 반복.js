const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const count = Number(input[0]);
const cases = input.slice(1, 1 + count);

cases.forEach((ele) => {
  let result = '';
  const [repetCount, str] = ele.split(' ');
  [...str].forEach((char) => {
    result += char.repeat(repetCount);
  });

  console.log(result);
});
