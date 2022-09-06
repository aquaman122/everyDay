const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];

for (let i =0; i< 9; i++) {
  numbers.push(i+1);
}

let answer = [];
for (let i =0; i<4; i++) {
  const index = Math.floor(Math.random() * numbers.length)
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}

const tries = [];
function checkInput(input) {
  if (input.length !== 4 ) {
    return alert('4자리 숫자를 입력해 주세요.');
  }
  if (new Set(input).size !== 4) {
    return alert('중복되지 않게 입력해 주세요')
  }
  if (tries.includes(input)) {
    return alert('이미 시도한 값입니다.')
  }
  return true;
}
function defeated() {
  const message = document.createTextNode(`패배! 정답은 ${answer.join('')}입니다.`);
  $logs.appendChild(message);
}

let out = 0;

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = $input.value;
  $input.value = '';
  if(!checkInput(value)) { // 입력값이 문제없을때
    return;
  }
  if(answer.join('') === value) {
    $logs.textContent = '홈런';
    return;
  }
  if (tries.length > 9) {
    defeated();
    return;
  }
  let strike = 0;
  let ball = 0;
  for(let i= 0; i< answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) { // 일치하는 숫자 발견
      if(index === i) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  }
  if (strike === 0 && ball === 0) {
    out++;
    $logs.append(`${value}: ${out} 아웃`, document.createElement('br'))
  } else {
    $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
  }
  if (out === 3) {
    defeated();
    return;
  }

  tries.push(value);
});
console.log(answer);