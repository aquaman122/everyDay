import React from 'react';
import './topbar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useStateValue } from '../../stateProvide';

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
            </ul>
          </div>
          <div className='topRight'>
            <ul className='topList'>
              <Link className='topListLink' to='/'>
                <li className='topListItem'>
                  LOGIN
                  </li>
              </Link>
              <Link className='topListLink' to='/register'>
                <li className='topListItem'>
                  REGISTER
                </li>
              </Link>
            </ul>
            <SearchIcon className='topSeachIcon'/>
          </div>
      </div>
    </>
  );
}

export default TopBar;