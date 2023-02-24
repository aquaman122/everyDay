import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
  const [{ basket, user }, dispatchEvent] = useStateValue();
  const navigate = useNavigate();
  const [error, SetError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [procssing, setProcssing] = useState('');
  const [succeed, setSucceed] = useState(false);

  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios ({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [basket])

  const handleSubmit = async(e) => {
    e.preventDefault();
    setProcssing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
      setSucceed(true);
      SetError(null);
      setProcssing('');

      navigate('/orders', {replace:true});
    })
  }

  const handleChange = (e) => {
    setDisable(e.empty);
    SetError(e.error ? e.error.message: '');
  }
  return (
    <>
      <div className='payment'>
        <div className='payment_container'>
          <Link to='/checkout'>
            <h1> 장바구니로 돌아가기 </h1>
          </Link>
          <h1>({basket?.length} 개의 상품목록이 존재합니다.)</h1>

          <div className='payment_section'>
            <div className='payment_title'>
              <h3> 배달 받을 곳 </h3>
            </div>
            <div className='payment_address'>
              <p>{user?.email} 님의 주소</p>
              <p>부산광역시</p>
              <p>강서구</p>
            </div>
          </div>
        </div>

        <div className='payment_section'>
          <div className='payment_title'>
            <h3> 상품 목록 </h3>
          </div>
          <div className='payment_items'>
            {basket.map(items => (
              <CheckoutProduct id={items.id} title={items.title} price={items.price} rating={items.rating} image={items.image} />
            ))}
          </div>
        </div>
        <div className='payment_section'>
          <div className='payment_title'>
              <h3> 결제 </h3>
          </div>

          <div className='payment_detail'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment_priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        총액 ( {basket.length} items) : <strong> {value} 원 </strong>
                      </p>
                      <small className='subtotal_gift'>
                        <input type='checkbox' /> 체크박스입니다
                      </small>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={`₩`}
                 />
              </div>

              <button disabled={procssing || disable || succeed}><span>{procssing ? <p>결제중입니다</p> : "결제하기"}</span></button>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment;