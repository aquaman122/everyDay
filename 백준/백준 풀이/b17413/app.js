const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

for(let i =0; i<input.length; i++) {
    let words = input[i].split(' ');
    let answer = words.map((word) => word.split('').reverse().join('')).join(' ');
    console.log(answer);
}

function solution() {
    // write here

}
