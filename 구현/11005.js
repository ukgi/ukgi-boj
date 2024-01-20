let [n, b] = require('fs').readFileSync('./input.txt').toString().trim().split(' ').map(Number);

console.log(n.toString(b).toUpperCase());
