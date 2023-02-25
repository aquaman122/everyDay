import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js/pure";
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51MesK9GYNswVKYtr228Oai8EJr2DxpbhRWQaRn4eySDwq1FpPxjoQrDCvWqKtoHCTijuJshsMhsJ7hOmzoXJs1CK00Mc0qcnID'
)


function App() {
  const [{}, dispatchEvent]  = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatchEvent({
          type:'SET_USER',
          user: authUser,
        })
      } else {
        dispatchEvent({
          type:'SET_USER',
          user: null,
        })
      }
    })
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />}/>
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/payment' element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
