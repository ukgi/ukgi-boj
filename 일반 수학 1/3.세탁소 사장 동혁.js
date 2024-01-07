let [t, ...c] = require('fs').readFileSync(0).toString().trim().split('\n');
t = Number(t);
c = c.map(Number);

const money = [25, 10, 5, 1];
const counts = [];

c.forEach((coinChange) => {
  const tmp = [];
  money.forEach((amount) => {
    tmp.push(Math.floor(coinChange / amount));
    coinChange = coinChange % amount;
  });

  counts.push(tmp);
});

counts.forEach((count) => {
  console.log(count.join(' '));
});
