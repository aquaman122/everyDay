const number = parseInt(prompt('몇 명이 참가 합니까?'));
const $order = document.querySelector("#order");
const $input = document.querySelector('input');
const $button = document.querySelector("button");
const $word = document.querySelector("#word");

let word;
let newWord;

function onClickBtn() { // 입력 단어 클릭.
  console.log(1);
  if (!word || word[word.length -1] === newWord[0]) { //제시어가 비어있는가 
    word = newWord;
    $word.textContent = word;
    const order = Number($order.textContent);
    if (order + 1 === number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else { 
      alert('올바른 단어가 아닙니다.')
  }
  $input.value = '';
  $input.focus();
}

function onInput(event) {
  newWord = event.target.value; //입력한 단어를 저장한다.
}

$input.addEventListener('input', onInput); //단어 입력 input(event)
$button.addEventListener('click', onClickBtn); // 입력 단어 클릭.


