import React from 'react';
import './topbar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';

function TopBar() {
  return (
    <>
      <div className='top'>
          <div className='topLeft'>
            <FacebookIcon className='topIcon'/>
            <TwitterIcon className='topIcon'/>
            <InstagramIcon className='topIcon'/>
          </div>
          <div className='topCenter'>
            <ul className='topList'>
              <li className='topListItem'>HOME</li>
              <li className='topListItem'>ABOUT</li>
              <li className='topListItem'>CONTEXT</li>
              <li className='topListItem'>LOGOUT</li>
            </ul>
          </div>
          <div className='topRight'>
            <img className='topImg'
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" />
            <SearchIcon className='topSeachIcon'/>
          </div>
      </div>
    </>
  );
}

export default TopBar;