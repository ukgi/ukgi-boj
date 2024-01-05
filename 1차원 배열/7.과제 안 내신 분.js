const input = require('fs').readFileSync(0).toString().split('\n').map(Number);
const attendanceNumbers = Array.from({ length: 30 }, (_, i) => i + 1);
const result = attendanceNumbers.filter((attendanceNumber) => !input.includes(attendanceNumber));

console.log(result.join('\n'));
