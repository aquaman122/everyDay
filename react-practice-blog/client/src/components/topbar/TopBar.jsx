import React from 'react';
import './topbar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

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
              <Link className='topListLink' to='/'>
                <li className='topListItem'>HOME</li>
              </Link>
              <li className='topListItem'>ABOUT</li>
              <li className='topListItem'>CONTEXT</li>
              <Link className='topListLink' to='/write'>
                <li className='topListItem'>WRITE</li>
              </Link>
              <Link className='topListLink' to='/login'>
              <li className='topListItem' >Login</li>
              </Link>
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