import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';

function Post({ title, content }) {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/content');
  }
  return (
    <>
      <div className='post'>
        <div className='post_name'>
          <h1> {title} </h1>
        </div>
        <div className='post_content'>
          <p> {content}
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <button className='post_btn'>Learn more</button>
        </form>
      </div>
    </>
  )
}

export default Post;