const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => v.split(' '));

solution(input)

function solution(input) {
    // write here
    let score = 0;
    let rank = [];
    let rankscore = 0;
    let pCount = 0;
    let aScore = 0;
    let sAvg = 0;
    for (let i =0; i < input.length; i++) {
        score += Number(input[i][1]);
        rank.push(input[i][2]);

        switch (rank[i]) {
            case 'A+': rankscore = 4.5;
            break;
            case 'A0': rankscore = 4.0;
            break;
            case 'B+': rankscore = 3.5;
            break;
            case 'B0': rankscore = 3.0;
            break;
            case 'C+': rankscore = 2.5;
            break;
            case 'C0': rankscore = 2.0;
            break;
            case 'D+': rankscore = 1.5;
            break;
            case 'D0': rankscore = 1.0;
            break;
            case 'F': rankscore = 0.0;
            break;
            case 'P': pCount++;
            break;
            default:
            break;
        }
        sAvg += Number(input[i][1]) + rankscore;
    }
    console.log(sAvg);
}