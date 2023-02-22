import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <>
      <div className='header'>
        <img className='header_logo'
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />

        <div className='header_search'>
          <input className='header_searchInput' type='text' />
          <SearchIcon className='header-searchIcon' />
        </div>

        <div className='header_nav'>
          <div className='header_option'>
            <span className='header_optionLineOne'>안녕하세요</span>
            <span className='header_optionLineTWo'>로그인하기</span>
          </div>
          <div className='header_option'>
            <span className='header_optionLineOne'>돌아가기</span>
            <span className='header_optionLineTWo'>주문내역</span>
          </div>
          <div className='header_option'>
            <span className='header_optionLineOne'>hello</span>
            <span className='header_optionLineTWo'>전체가격</span>
          </div>
          <div className='header_optionBasket'>
            <ShoppingBasketIcon/>
            <span className='header_optionLineTwoBasketCount'>0</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;