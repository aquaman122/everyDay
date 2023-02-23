import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{basket}, dispatchEvent] = useStateValue();
  return (
    <>
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          className='checkout_ad'
          src=""
          alt=''
         />

         <div>
            <h2 className='checkout_title'>
              장바구니입니다.
            </h2>
            {basket.map((item) => (
              <CheckoutProduct 
                id={item.id} 
                title={item.title} 
                price={item.price} 
                rating={item.rating} 
                image={item.image}/>
            ))}
         </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
    </>
  );
}

export default Checkout;  