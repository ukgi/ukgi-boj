const input = require('fs').readFileSync(0).toString().split('\n');

for (element of input) {
  const [a, b] = element.split(' ').map(Number);

  if (a === 0 && b === 0) break;
  console.log(a + b);
}
