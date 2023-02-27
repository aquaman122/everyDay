import './Single.css';
import Sidebar from '../sidebar/Sidebar';
import SinglePost from '../singlePost/SinglePost';
import React from 'react';

function Single() {
  return (
    <>
      <div className='single'>
        <SinglePost />
        <Sidebar />
      </div>
    </>
  )
}

export default Single;