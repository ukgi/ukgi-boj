const input = require('fs').readFileSync(0).toString().trim();

if (input.length === 0) {
  return console.log(0);
}

console.log(input.split(' ').length);
