const input = require('fs').readFileSync(0).toString().split('\n');

function solution(input) {
  const totalAmount = Number(input[0]);
  const totalCounts = Number(input[1]);
  const itemInfos = input.slice(2, 2 + totalCounts);
  let expectedAmount = 0;

  itemInfos.forEach((info) => {
    const [price, count] = info.split(' ').map(Number);
    expectedAmount += price * count;
  });

  if (totalAmount === expectedAmount) {
    return console.log('Yes');
  }

  return console.log('No');
}

solution(input);
