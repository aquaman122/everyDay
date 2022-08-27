const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
    // write here
    
    let H = A;
    let M = B;

    M -= 45;
    if (M < 0) {
        H -= 1;
        M += 60;

        if (H < 0) {
            H += 24;
        }
    }

    console.log(`${H} ${M}`);
}