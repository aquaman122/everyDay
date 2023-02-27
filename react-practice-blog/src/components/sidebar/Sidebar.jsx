import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Sidebar() {
  return (
    <>
      <div className='sidebar'>
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
          alt="" />
          <p>
            Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
            amet ex esse.Sunt eu ut nostrud id quis proident.
          </p>
        </div>
        <div className='sidebarItem'>
          <div className="sidebarTitle second">CATEGORIES</div>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>Life</li>
            <li className='sidebarListItem'>Music</li>
            <li className='sidebarListItem'>Style</li>
            <li className='sidebarListItem'>Sport</li>
            <li className='sidebarListItem'>Tech</li>
            <li className='sidebarListItem'>Cinema</li>
          </ul>
        </div>
        <div className='sidebarItem'>
          <div className="sidebarTitle third">FOLLOW US</div>
          <div className='sidebarSocial'>
            <FacebookIcon className='sidebarIcon'/>
            <TwitterIcon className='sidebarIcon'/>
            <InstagramIcon className='sidebarIcon'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar;