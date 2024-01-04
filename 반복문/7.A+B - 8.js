const input = require('fs').readFileSync(0).toString().split('\n');
const count = Number(input[0]);
const cases = input.slice(1, 1 + count);

for (let i = 0; i < count; i += 1) {
  const [a, b] = cases[i].split(' ').map(Number);

  console.log(`Case #${i + 1}: ${a} + ${b} = ${a + b}`);
}
