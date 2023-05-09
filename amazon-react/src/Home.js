import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <>
    <div className='home'>

      <div className='home_container'>
        
        <img className='home_image'
          src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt="" />

        <div className='home_row'>
          <Product id="2323"
            title="글자"
            price={3000000000}
            image="https://en.pimg.jp/024/292/158/1/24292158.jpg"
            rating={5}/>
          <Product id="2320"
            title="자동차2"
            price={3000000000}
            image="https://www.motorgraph.com/news/photo/201910/24006_75909_4825.jpg"
            rating={3}/>
        </div>
        
        <div className='home_row'>
          <Product
            id="234425"
            title="자동차3"
            price={3000000000}
            image="https://www.autodaily.co.kr/news/photo/201704/335790_17345_2048.jpg"
            rating={4}
          />
          <Product
            id="2512"
            title="자동차4"
            price={3000000000}
            image="https://post-phinf.pstatic.net/MjAxNzExMTVfOTcg/MDAxNTEwNzMxMjAxNzMw.55ihPnB6d-Y-MuT3cCIgqAiwNlLR5GOIUfUDHwsw68Eg.S-bPeRceHEq_rjEnOiS1RvjphGgnCjuWp6FQFdcL10cg.JPEG/McLaren-720S-2018-1024-03.jpg?type=w1200"
            rating={2}
          />
        </div>
        
        <div className='home_row'>
          <Product
            id="12314"
            title="자동차5"
            price={3000000000}
            image="http://img.danawa.com/cp_images/service/103/4109708/97ee2ca2.jpg"
            rating={1}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;