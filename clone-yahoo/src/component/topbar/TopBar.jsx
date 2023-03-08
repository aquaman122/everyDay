import './TopBar.css';
import React from 'react';

function TopBar() {
  return (
    <> 
      <div className='topbar'>
        <div className='topbarTitle'>
          <img 
          src="" 
          alt="" />
        </div>
        <div className='topbarSearch'>
          <form className='searchForm'>
            <input type="text" />
          </form>
        </div>
        <div className='topbarRight'>

        </div>
      </div>
    </>
  );
}

export default TopBar;