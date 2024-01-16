let [n, arrN, m, arrM] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
arrN = arrN.split(' ').map(Number);
arrM = arrM.split(' ').map(Number);

arrM.forEach((num) => {
  arrN.includes(num) ? console.log(1) : console.log(0);
});
