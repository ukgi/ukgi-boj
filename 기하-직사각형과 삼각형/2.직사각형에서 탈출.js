const [x, y, w, h] = require('fs').readFileSync('./input.txt').toString().trim().split(' ').map(Number);

console.log(Math.min(x, w - x, y, h - y));
