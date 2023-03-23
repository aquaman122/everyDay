const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

solution(T);

function solution(T) {
  for (let i = 0; i < T; i++) {
    const xyr = input[i].split(' ').map(v => +v);
    let [x1, y1, r1, x2, y2, r2] = xyr;
    
    const dx = x1 - x2;
    const dy = y1 - y2;
    if (r1 > r2) {
      const temp = r1;
      r1 = r2;
      r2 = temp;
    }

    const rSum = (r1 + r2) * (r1 + r2);
    const rSub = (r2 - r1) * (r2 - r1);
    const d = dx * dx + dy * dy;

    if (d < rSum && d > rSub) {
      console.log(2);
    } else if (d === rSum || (d === rSub && d !== 0)) {
      console.log(1);
    } else if (d < rSub || d > rSum) {
      console.log(0);
    } else if (d === 0) {
      if (r1 === r2) {
        console.log(-1);
      } else {
        console.log(0);
      }
    }
  }
}