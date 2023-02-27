import React from 'react';
import './Settings.css';
import Sidebar from '../../sidebar/Sidebar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Settings() {
  return (
    <>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className='settingsUpdateTitle'>Update Your Account</span>
            <span className='settingsUpdateTitle'>Delete Account</span>
          </div>
          <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img 
              className=''
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
              alt="" />
              <label htmlFor="fileInput">
                <AccountCircleIcon className='settingsPPIcon' />
              </label>
              <input type="file" id='fileInput' style={{display: 'none'}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder='sukwon' />
            <label>Email</label>
            <input type="Email" placeholder='swj@gamil.com' />
            <label>Password</label>
            <input type="password" />
            <button className='settingsSubmit'>Update</button>
          </form>
        </div>
        <Sidebar />
      </div>
    </>
  )
}

export default Settings;