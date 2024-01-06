const input = require('fs').readFileSync(0).toString().trim();
input === [...input].reverse().join('') ? console.log(1) : console.log(0);
