import './App.css';
import {useState, useRef} from 'react';

function App() {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  let strike;
  let ball;

  const array = Array(10).fill().map((v , i) => i);
  const shuffled = [];

  for (let i =0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    shuffled.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  console.log(shuffled);
  
  function checkInput(value) {
    if(new Set(value).size !== 4) {
      alert('중복되지않게 숫자를 입력하세요');
      return false;
    } else {
      return true;
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    if(!checkInput(value)) { // 충족시
      return;
    }
    let array = value.split('').map(v => +v);
    for (let i =0; i < shuffled.length; i++) {
      if (array === shuffled) {
        setResult(`홈런입니다!!`);
        return;
      }
    }
    shuffled.forEach((ele, i) => {
      const index = array.indexOf(ele);
      if(index > -1) {
        if(index === i) {
          strike++;
        } else {
          ball++;
        }
      }
    })
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} value={value} onChange={(event) => {setValue(event.target.value)}}/>
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
}

export default App;
