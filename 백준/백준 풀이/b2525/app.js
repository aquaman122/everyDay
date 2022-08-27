const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


let time = +input[1];
input = input[0];
input = input.split(' ').map((item) => +item);



solution(input[0], input[1], time);

function solution(A, B, C) {
    // write here
    
    let H = A;
    let M = B;
    let cookTime = C;

    M += cookTime;

    if ( M >= 60 ) {
        H += Math.floor(M /60);
        M %= 60;

        if ( H > 23) {
            H -= 24;
        }
    }

    console.log(`${H} ${M}`);
}