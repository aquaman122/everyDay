const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(v => +v);


solution();

function solution() {
    // write here
    let gcd = [];
    for (let i =0; i < input.length; i++) {
      if (input[i] !== -1) {
        for (let j = 1; j < input[i]; j++) {
          if (input[i] % j === 0) {
            gcd.push(j);
          }
        }
      console.log(gcd);
      }
    }
}