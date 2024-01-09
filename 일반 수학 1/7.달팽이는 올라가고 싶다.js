const [a, b, v] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);

console.log(Math.ceil((v - b) / (a - b)));
