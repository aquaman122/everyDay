import React from 'react';
import './Posts.css';
import Post from '../post/Post';

function elapsedTime(date) {
  const start = new Date(date);
  const end = new Date();

  const diff = (end - start) / 1000;

  const times = [
    { name: '년', milliSeconds: 60 * 60 * 24 * 365},
    { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
    { name: '일', milliSeconds: 60 * 60 * 24 },
    { name: '시간', milliSeconds: 60 * 60 },
    { name: '분', milliSeconds: 60 }
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime}${value.name} 전`;
    }
  }
  return '방금 전';
}

let today = new Date();

let year = today.getFullYear();
let month = ('0' + (today.getMonth() + 1)).slice(-2);
let day = ('0' + today.getDate()).slice(-2);

let dateString = year + '-' + month + '-' + day;

const postData = [
  { img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    subTitle: "Music",
    subTitle2: "Life",
    title: 'Lorem ipsum dolor sit amet',
    time: elapsedTime(dateString),
    content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
    atque, exercitationem quibusdam, reiciendis odio laboriosam?`
  },
  { 
    img: "https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    subTitle: "Music",
    subTitle2: "Life",
    title: 'Lorem ipsum dolor sit amet',
    time: elapsedTime(dateString),
    content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
    atque, exercitationem quibusdam, reiciendis odio laboriosam?`
  },
  { img: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    subTitle: "Music",
    subTitle2: "Life",
    title: 'Lorem ipsum dolor sit amet',
    time: elapsedTime(dateString),
    content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
    atque, exercitationem quibusdam, reiciendis odio laboriosam?`
  },
  { img: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    subTitle: "Music",
    subTitle2: "Life",
    title: 'Lorem ipsum dolor sit amet',
    time: elapsedTime(dateString),
    content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
    atque, exercitationem quibusdam, reiciendis odio laboriosam?`
  },
  { img: "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    subTitle: "Music",
    subTitle2: "Life",
    title: 'Lorem ipsum dolor sit amet',
    time: elapsedTime(dateString),
    content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
    atque, exercitationem quibusdam, reiciendis odio laboriosam?`
  },
]

function Posts() {
  return (
    <>
      <div className='posts'>
        {postData.map(item => (
          <Post items={item} />
        ))}
      </div>
    </>
  )
}

export default Posts;