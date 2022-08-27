const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
    // write here
    
    if ( 100 >= A && A  >= 90) {
        console.log("A");
    } else if (89 >= A && A >= 80) {
        console.log("B");
    } else if (79 >= A && A >= 70) {
        console.log("C");
    } else if (69 >= A && A  >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}