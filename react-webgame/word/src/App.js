import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [word, setWord] = useState('장석원');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);
  
  function onSubmit(e) {
    e.preventDefault();
    if (word[word.length -1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  }

  function onChangeInput(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} value={value} onChange={onChangeInput}/>
      </form>
      <div>{result}</div>
    </>
  );
}

export default App;
