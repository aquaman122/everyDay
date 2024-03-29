const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

solution();

function solution() {
  const result = {
    '1 2 3 4 5 6 7 8': 'ascending',
    '8 7 6 5 4 3 2 1': 'descending',
  }[input];

  console.log(result || 'mixed');
}