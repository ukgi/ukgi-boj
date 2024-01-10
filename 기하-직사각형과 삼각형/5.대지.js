const [count, ...coordinates] = require('fs').readFileSync(0).toString().trim().split('\n');

if (count < 2) {
  return console.log(0);
}

const tmp = coordinates.map((element) => element.split(' ').map(Number));
const xList = [];
const yList = [];
tmp.forEach(([x, y]) => {
  xList.push(x);
  yList.push(y);
});

const maxX = Math.max(...xList);
const minX = Math.min(...xList);
const maxY = Math.max(...yList);
const minY = Math.min(...yList);

console.log((maxX - minX) * (maxY - minY));
