const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const count = +input[0];
const score = input[1].split(' ').map((item) => +item);


solution(count, score)

function solution(count, score) {
    // write here
    
    let max = Math.max(...score);
    let answer = 0;

    for (let i = 0; i < count; i++) {
        let num = score[i];
        answer += num / max * 100;
    }
    answer /= count;
    console.log(answer);
}