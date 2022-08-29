let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
const onClickNumber = (e) => {
  if (!operator) { // 비어있다.
    numOne += e.target.textContent;
    $result.value += e.target.textContent;
    return;
  } //비어있지 않다.
    if(!numTwo) {
      $result.value = '';
    }
    numTwo += e.target.textContent;
    $result.value += e.target.textContent;
} // 고차 함수 (high order function)

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

const onClickOperator = (op) => () => {
  if(op === '-') { // op가 - 일때
    if(!numOne) { // operator 가  비었을때
      numOne += op;
      $result.value += op;
      return;
    } else if (numOne && !operator) {
      operator = op;
      $operator.value = op;
      return;
    }
    if (!numTwo) { // numTwo가 비엇을때
      $result.value = '';
      numTwo += op;
      $result.value = op;
      return;
    }
  } else { // op가 -가 아닐때
    if (!numOne) { //numOne이 비어있을때
      alert('숫자를 입력하세요.');
    } else { //numOne이 있을때
      operator = op;
      $operator.value = op;
    }
  }
  if (numTwo) {
    switch (operator) {
      case '+':
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case '-':
        $result.value = numOne - numTwo;
        break;
      case '*':
        $result.value = numOne * numTwo;
        break;
      case '/':
        $result.value = numOne / numTwo;
        break;
      default:
        break;
    }
    numOne = $result.value;
    numTwo = '';
  }
  if (numOne) {
    operator = op;
    $operator.value = op;
  } else {
    alert('숫자를 먼저 입력하세요.');
  }
}
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {
  if (numTwo) {
    switch (operator) {
      case '+':
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case '-':
        $result.value = numOne - numTwo;
        break;
      case '*':
        $result.value = numOne * numTwo;
        break;
      case '/':
        $result.value = numOne / numTwo;
        break;
      default:
        break;
    }
  } else {
    alert('숫자를 먼저 입력하세요.');
  }
});
document.querySelector('#clear').addEventListener('click', () => {
  numOne = '';
  operator = '';
  numTwo = '';
  $operator.value = '';
  $result.value = '';
});