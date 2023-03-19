const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = +input;

solution(T);

function solution(T) {
  const dp = Array(T + 1).fill(BigInt(0));
  dp[1] = BigInt(1);

  for (let i = 2; i <=T; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp[T].toString());
}