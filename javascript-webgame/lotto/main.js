const candidate = Array(45).fill().map((ele, idx) => idx +1 );
const shuffle = [];

while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];

const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = winBalls[0];
  $result.appendChild($ball);
}, 1000);
setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = winBalls[1];
  $result.appendChild($ball);
}, 2000);
setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = winBalls[2];
  $result.appendChild($ball);
}, 3000);
setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = winBalls[3];
  $result.appendChild($ball);
}, 4000);
setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = winBalls[4];
  $result.appendChild($ball);
}, 5000);
setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = winBalls[5];
  $result.appendChild($ball);
}, 6000);

setTimeout(() => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = winBalls[5];
  $result.appendChild($ball);
}, 6000);

setTimeout(() => {
  const $bonus = document.createElement('div');
  $bonus.className = 'ball';
  $bonus.textContent = bonus;
  $bonus.appendChild($bonus);
}, 7000);
