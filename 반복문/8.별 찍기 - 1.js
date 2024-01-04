const input = Number(require('fs').readFileSync(0).toString());

for (let i = 1; i <= input; i += 1) {
  console.log('*'.repeat(i));
}
