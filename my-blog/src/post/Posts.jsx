import react from 'react';
import Post from './Post';

function Posts() {

  return (
    <>
      <div className='home_row_nav'>
          <div className='home_nav'>
            <Post
            title='javascript'
            content='rkskek'
            />
          </div>
          <div className='home_nav'>
            <Post 
            title='가자고'
            content='you know?'
            />
          </div>
          <div className='home_nav'>
            <Post />
          </div>
      </div>
        <div className='home_row_nav'>
          <div className='home_nav'>
            <Post />
          </div>
          <div className='home_nav'>
            <Post />
          </div>
          <div className='home_nav'>
            <Post />
          </div>
      </div>
    </>
  )
}

export default Posts;