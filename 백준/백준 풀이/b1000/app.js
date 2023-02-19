const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let currentTime = input[0];
let [h, m] = currentTime.split(' ').map((x) => +x);
let time = +input[1];

solution(h, m, time);

function solution(h, m, time) {
    // write here  
    m += time;
    if (m >= 60) {
        h += Math.floor(m / 60);
        m %= 60;
        if (h > 23) {
            h -= 24;
        }
    }
    console.log(h, m);
}