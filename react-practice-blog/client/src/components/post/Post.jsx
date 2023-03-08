import React from 'react';
import './Post.css';

function Post({img, subTitle, subTitle2, title, time, content}) {
  return (
    <>
      <div className='post'>
        <img
        className='postImg'
        src={img}
        alt=''
         />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">{subTitle}</span>
            <span className="postCat">{subTitle2}</span>
          </div>
          <span className="postTitle">
            {title}{/* Lorem ipsum dolor sit amet */}
          </span>
          <hr />
          <span className='postData'>{time}</span>
        </div>
        <p className='postDesc'>
          {content}
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
          fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
          atque, exercitationem quibusdam, reiciendis odio laboriosam? */}
        </p>
      </div>
    </>
  );
}

export default Post;