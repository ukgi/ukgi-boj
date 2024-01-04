const input = require('fs').readFileSync(0).toString().split('\n');

for (let i = 1; i <= input; i += 1) {
  console.log(' '.repeat(input - i) + '*'.repeat(i));
}
