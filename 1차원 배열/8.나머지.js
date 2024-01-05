const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
const remainderList = input.map((ele) => ele % 42);
const result = new Set(remainderList);

console.log(result.size);
