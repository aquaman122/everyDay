const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arr = input.map((item) => item%42);

solution(arr)

function solution(arr) {
    // write here
    
    const set = new Set(arr);
    const uniqueArr = [...set];

    console.log(uniqueArr.length);
}