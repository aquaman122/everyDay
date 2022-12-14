const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const test = input.shift();

solution(test)

function solution(test) {
    // write here
    // 빈 배열
    const stack = [];
    const result = [];
    
    for (let i = 0; i < test; i++ ) {
        switch (input[i]) {
            case 'pop' :
               result.push(stack.pop() || -1);
               break;

            case 'size' : 
                result.push(stack.length);
                break;

            case 'empty' : 
                result.push(stack[0] ? 0 : 1);
                break;
            
            case 'top' : 
                result.push(stack[stack.length -1] || -1)
                break;

            default: 
                stack.push(input[i].split(' ')[1]);
                break;
        }
    }

    console.log(result.join(' '));
}