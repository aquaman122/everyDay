const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1], input[2]);

function solution(A, B, C) {
    // write here

let money = 0;
let maxNum = 0;

    if (A === B && A === C) {
        money = (10000 + A * 1000);
    } else if (A === B || A === C || B === C) {
        if (A === B || A === C) {
            money = (1000 + A*100);
        } else {
            money = (1000 + B*100);
        }
    } else {
        maxNum = Math.max(...input);
        money = maxNum*100;
    }

    console.log(money);
}