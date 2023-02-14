const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCase = input[0];

solution(testCase);

function solution(testCase) {
    // write here
    let k = input[1];
    let n = input[2];
    let people = 0;
    


    
}