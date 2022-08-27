const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



solution()

function solution() {
    // write here

    let count = +input[0];
    let numbers = input[1].split(' ').map((item) => +item);

    let max = numbers[0];
    let min = numbers[0];

    for (let i = 0; i <= count; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        }

        if (min > numbers[i]) {
            min = numbers[i];
        }
    }

    console.log(`${min} ${max}`);
}
