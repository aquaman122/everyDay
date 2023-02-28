import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/');
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="login">
        <span className='loginTitle'>Login</span>
        <form className='loginForm' onSubmit={onSignIn}>
          <label>Email</label>
          <input 
          type="text" 
          onChange={e => setEmail(e.target.value)}
          value={email}
          className='loginInput' 
          placeholder='Enter your email...'/>
          <label>Password</label>
          <input 
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password" 
          className='loginInput' 
          placeholder='Enter your password...' 
          />
          <button className='loginButton'>Login</button>
        </form>
        <Link to='/register'>
        <button className='loginRegisterButton'>Register</button>
        </Link>
      </div>
    </>
  )
}

export default Login;