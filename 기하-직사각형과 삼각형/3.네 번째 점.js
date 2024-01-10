const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const xList = [];
const yList = [];

input.forEach((coordinate) => {
  const [x, y] = coordinate.split(' ').map(Number);
  xList.push(x);
  yList.push(y);
});

const duplicatedX = xList.find((x, i) => xList.indexOf(x) !== i);
const duplicatedY = yList.find((y, i) => yList.indexOf(y) !== i);

const result = xList.filter((x) => x !== duplicatedX).concat(yList.filter((y) => y !== duplicatedY));

console.log(result.join(' '));
