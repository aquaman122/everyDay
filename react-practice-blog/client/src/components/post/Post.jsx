import React from 'react';
import './Post.css';

function Post(props) {
  return (
    <>
      <div className='post'>
        <img
        className='postImg'
        src={props.items.img}
        alt=''
         />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">{props.items.subTitle}</span>
            <span className="postCat">{props.items.subTitle2}</span>
          </div>
          <span className="postTitle">
            {props.items.title}{/* Lorem ipsum dolor sit amet */}
          </span>
          <hr />
          <span className='postData'>{props.items.time}</span>
        </div>
        <p className='postDesc'>
          {props.items.content}
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