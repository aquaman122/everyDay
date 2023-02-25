import React from 'react';
import './Home.css';
import Script from './Script';
import SearchIcon from '@mui/icons-material/Search';

function Home() {
  return (
    <>
      <div className='home'>
        <div className='home_menu'>
          <form className="home_search_box">
            <input type="search" name='focus' placeholder="Search..."/>
            <span>
              <button>
                <SearchIcon/>
              </button>
            </span>
          </form>
          <div>
              <select
                className="home_select">
                <option value='category'>Category</option>
                <option value='CS'>CS</option>
                <option value='Book'>Book</option>
              </select>
          </div>
        </div>
        <div className='home_row_nav'>
          <div className='home_nav'>
            <Script />
          </div>
          <div className='home_nav'>
            <Script />
          </div>
          <div className='home_nav'>
            <Script />
          </div>
        </div>
        <div className='home_row_nav'>
          <div className='home_nav'>
            <Script />
          </div>
          <div className='home_nav'>
            <Script />
          </div>
          <div className='home_nav'>
            <Script />
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;