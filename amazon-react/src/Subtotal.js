import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const [{basket}, dispatchEvent] = useStateValue();
  const navigate = useNavigate();
  return (
    <>
      <div className='subtotal'>
        <CurrencyFormat
          renderText={(value) => (
            <>
            <p>
              총액 ( {basket.length} items)   : <strong> {value} 원 </strong>
            </p>
            <small className='subtotal_gift'>
              <input type="checkbox" /> 체크박스입니다.
            </small>
            </>
          )}        

          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₩'}
        />
        <button onClick={e => navigate('/payment')}>결제하기</button>
      </div>
    </>
  );
}

export default Subtotal;