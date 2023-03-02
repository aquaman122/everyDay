const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(v => +v);

solution(N, M)

function solution(N, M) {
  // write here
  let arr = new Array(N).fill().map((v, i) => i + 1);

  for (let i = 0; i < M; i++) {
    const [I, J] = input[i].split(' ').map(v => +v);
    let indexA = I - 1;
    let indexB = J - 1;
    let valueA = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = valueA;
  }
  console.log(arr.join(' '));
}
