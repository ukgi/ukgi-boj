const input = require('fs').readFileSync(0).toString().trim().split('\n');
const t = Number(input[0]);
const cases = input.slice(1, 1 + t);

const result = [];
cases.forEach((ele) => {
  const formatted = ele.trim();
  result.push(`${formatted[0]}${formatted[formatted.length - 1]}`);
});

console.log(result.join('\n'));
