const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const test = input.shift();

solution(test)

function solution(test) {
    // write here
    // 빈 배열
    const array = [];
    const answer = [];
    for (let i =0; i < test; i++) {
        switch(input[i]) {
            case 'pop':
              array.length === 0 ? answer.push(-1) : answer.push(array.pop());
              break;
            case 'size':
              answer.push(array.length);
              break;
            case 'empty':
              array.length === 0 ? answer.push(1) : answer.push(0);
              break;
            case 'top':
              array.length === 0 ? answer.push(-1) : answer.push(array[array.length - 1]);
              break;
            default:
              array.push(input[i].split(' ')[1]);
              break;
        }
    }
    console.log(answer.join('\n'));
}