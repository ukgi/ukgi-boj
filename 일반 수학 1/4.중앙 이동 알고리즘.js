const n = Number(require('fs').readFileSync(0).toString().trim());

console.log((2 ** n + 1) ** 2);
