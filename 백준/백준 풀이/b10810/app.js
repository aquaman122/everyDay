const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input.shift().split(' ').map(v => +v);

solution(N, M)

function solution(N, M) {
  // write here
  let arr = new Array(N).fill(0);

  for (let i =0; i < M; i++) {
    const [I, J, K] = input[i].split(' ').map(v => +v);
    
    for (let j= I; j <= J; j++) {
      arr[j - 1] = K;
    }
  }
  console.log(arr.join(' '));
}
