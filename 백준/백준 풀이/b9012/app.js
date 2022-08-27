const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const test  = input.shift();
const result = [];

solution(test, result)

function solution(test, result) {
    // write here
    
    for (let i = 0; i < test; i++) {
        let cnt = 0;

        for (let s of input[i]) {
            cnt += s === '(' ? 1 : -1 ;

            if (cnt < 0) break;
        }

        result.push(cnt === 0 ? 'YES' : 'NO');
    }
    console.log(result.join('\n'));
}