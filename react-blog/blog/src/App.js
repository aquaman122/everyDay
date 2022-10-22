/* eslint-disable */

import './App.css';
import { useState } from 'react';


function App() {

  let post = '강남 우동 맛집';
  let [textName, setTextName] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [date, setDate] = useState('2월 17일 발행');
  let [like, setLike] = useState(0);

  function onClickLike() {
    setLike(like + 1);
  }

  function onClickButton() {
    const random = Math.floor(Math.random() * textName.length);
    return (
      <div className='list'>
        <h4>{textName[random]}</h4>
        <p>{ date }</p>
      </div>
    );
  }
  return (
    <>
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <button onClick={ () => {
        let copy = [...textName];
        copy[0] = '여자코트 추천';
        setTextName(copy);
      }}>Update</button>

      <div className='list'>
        <h4>{textName[0]} <span onClick={onClickLike}>Like</span> {like} </h4>
        <p>{ date }</p>
      </div>


      <div className='list'>
        <h4>{textName[1]}</h4>
        <p>{ date }</p>
      </div>


      <div className='list'>
        <h4>{textName[2]}</h4>
        <p>{ date }</p>
      </div>
    </div>
    </>
  );
}

export default App;
