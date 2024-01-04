const input = Number(require('fs').readFileSync(0).toString());

function solution(input) {
  const DEFAULT_BYTE_SIZE = 4;
  const byte = input;
  const strCount = byte / DEFAULT_BYTE_SIZE;
  const str = Array.from({ length: strCount }).fill('long').join(' ');

  console.log(str + ' ' + 'int');
}

solution(input);
