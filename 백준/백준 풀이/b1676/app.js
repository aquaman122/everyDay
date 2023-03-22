const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input;

solution(n);

function solution(n) {
  let ans = 1;
  for (let i = n; i > 1; i--) {
    ans *= i;
  }
  let count = 0;
  ans.toString().split('').filter(v => v == 0 ? count+=1 : false);
  console.log(count);
}