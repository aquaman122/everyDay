const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution();

function solution() {
    // write here
  for (let i =0; i < +input; i++) {
    let result = '';

    for (let j = +input - 1; j >= 0; j--) {
        result += j <= i ? '*' : ' ';
    }
    console.log(result);
  }
}