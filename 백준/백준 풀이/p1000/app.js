const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let arr = input;

solution(arr);

function solution(arr) {
    // write here
    let sum = 0;
    for(let i =0; i < arr.length; i++) {
        sum += arr[i];
        console.log(sum);
    }
}