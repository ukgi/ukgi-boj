const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (element of input) {
  const [a, b] = element.split(' ').map(Number);

  console.log(a + b);
}
