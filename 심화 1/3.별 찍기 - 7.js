const input = Number(require('fs').readFileSync(0).toString().trim());

const table = {};
const maxCount = 2 * input - 1;

for (let i = 1; i <= input; i += 1) {
  const count = 2 * i - 1;
  const diff = maxCount - count;

  table[i] = [...'*'.repeat(count)];
  const space = [...' '.repeat(diff / 2)];

  table[i] = space.concat(table[i]);
}

const up = Object.values(table);
const down = up.slice(0, up.length - 1).reverse();

for (let i = 0; i < up.length; i += 1) {
  console.log(up[i].join(''));
}

for (let i = 0; i < down.length; i += 1) {
  console.log(down[i].join(''));
}
