import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className='header'>
          <div onClick={() => navigate('/')} className='header_name'>
            Pract Blog
          </div>
          <div className='header_cs'>
            CS
          </div>
          <div className='header_book'>
            Book
          </div>
          <div className='header_menu'>
            Menu
          </div>
      </div>
    </>
  )
}

export default Header;