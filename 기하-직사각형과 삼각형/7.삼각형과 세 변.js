const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const testCases = input.slice(0, input.length - 1);

testCases.forEach((element) => {
  const sides = element.split(' ').map(Number);
  if (isTriAngle(sides)) {
    console.log(checkTriangleType(sides));
  } else console.log('Invalid');
});

function checkTriangleType(sides) {
  if (new Set(sides).size === sides.length) {
    return 'Scalene';
  }

  if (new Set(sides).size === 2) {
    return 'Isosceles';
  }

  return 'Equilateral';
}

function isTriAngle(sides) {
  const copySlides = [...sides];
  const max = Math.max(...sides);
  const maxIndex = sides.findIndex((side) => side === max);
  copySlides.splice(maxIndex, 1);
  const sumOfRests = copySlides.reduce((acc, cur) => acc + cur, 0);

  return max < sumOfRests;
}
