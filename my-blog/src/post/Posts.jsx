import react from 'react';
import Post from './Post';

function Posts() {

  return (
    <>
      <div className='home_row_nav'>
          <div className='home_nav'>
            <Post
            title='javascript'
            content=''
            />
          </div>
          <div className='home_nav'>
            <Post 
            title=''
            content='?'
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