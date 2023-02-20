import './App.css';
import {useState, useRef} from 'react';
function App() {
  const [firstNum, setFristNum] = useState(Math.floor(Math.random() * 10));
  const [secondNum, setSecondNum] = useState(Math.floor(Math.random() * 10));
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  function onSubmit(event) {
    event.preventDefault();
    setFristNum(Math.ceil(Math.random() * 9));
    setSecondNum(Math.ceil(Math.random() * 9));
    if (firstNum * secondNum === parseInt(value)) {
      setValue(value);
      setResult(`정답! ${value}`);
      setValue('');
      inputRef.current.focus();
      return;
    }
    setValue('');
    setResult('틀렸습니다');
    inputRef.current.focus();
  }

  function onChangeInput(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <div>{`${firstNum}곱하기${secondNum}는?`}</div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type='number' value={value} onChange={onChangeInput}/>
      </form>
      <div>{result}</div>
    </>
  );
}

export default App;
