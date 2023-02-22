const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input;

solution(n);

function solution(n) {
    // write here
    const answer = [];
    let star = '*';
    for (let i = 1; i < n; i++) {
        const empty = '';
        
    }
}