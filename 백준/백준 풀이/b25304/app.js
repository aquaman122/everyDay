const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


T = +input[1];


solution(+input[0], T)

function solution(result, T) {
    // write here

    let sum = 0;
    for(let i = 2; i <= T + 1; i++) {
       let num = input[i].split(' ').map((item) => +item);
       let a = num[0];
       let b = num[1];

        sum += a * b;
    }
    
    if (sum === result) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}