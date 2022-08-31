const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


function solution() {
    // write here
    
    for (let i=0; i<input.length; i++) {
        let str = input[i].split(' ');
        console.log('str');
    }
}