const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = input[0].split(' ').map((item) => +item);
let arr = input[1].split(' ').map((item) => +item);


solution(num[0], num[1], arr)

function solution(N, X, arr) {
    // write here
    let answer = [];

    for (let i = 0; i <= N; i++) {
        
        if (arr[i] < X) {
            answer.push(arr[i]);
        }
    }
    console.log(answer.join(' '));
}