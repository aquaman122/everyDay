const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arr = input[1].split(' ');
const v = input[2];

solution(arr, v)

function solution(arr, v) {
  // write here
  let count = 0;
  arr.filter((item, idx) => {
    if (item === v) {
      count++;
    }
  });
  console.log(count);
}
