import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Script.css';

function Script() {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/content');
  }
  return (
    <>
      <div className='script'>
        <div className='script_name'>
          <h1> javaScript </h1>
        </div>
        <div className='script_content'>
          <p> array메소드 
            forEach, map, reduce, splice, slice 등등 
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <button className='script_btn'>Learn more</button>
        </form>
      </div>
    </>
  )
}

export default Script;