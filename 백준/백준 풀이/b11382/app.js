const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const [a, b, c] = input.map(v => +v);


solution(a, b, c)

function solution(a, b, c) {
    // write here
    console.log(a + b + c);
}