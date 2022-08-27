const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map((item) => +item);


solution(+input)

function solution(N) {
    // write here
  let count = 0;
  for (let i = 1; i <= N; i++) {
    let nArr = String(i);
    if (i < 100) {
      count++;
      continue;
    }

    let A = +nArr[0] - +nArr[1];
    let B = +nArr[1] - +nArr[2];
    if (A === B) {
      count++;
    }
  }

  console.log(count);
}