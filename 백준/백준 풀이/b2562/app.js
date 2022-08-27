const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let array = []
for (let i = 0; i < input.length; i++) {
    array.push(+input[i]);
}

solution(array)

function solution(array) {
    // write here


    let max = Math.max(...array);
    
    console.log(max);
    max = String(max);
    console.log(input.indexOf(max) + 1);
}