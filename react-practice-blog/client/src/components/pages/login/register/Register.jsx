import React, { useState } from 'react';
import './Register.css';
import { auth } from '../../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
  // const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Register
      navigate('/login');
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <>
      <div className="register">
        <span className='registerTitle'>Register</span>
        <form className='registerForm' onSubmit={onRegister}>
          {/* <label>Username</label>
          <input 
          value={username} 
          onChange={e => setUsername(e.target.value)}
          type="text" 
          className='registerInput' 
          placeholder='Enter your username...' /> */}
          <label>Email</label>
          <input value={email} 
          onChange={e => setEmail(e.target.value)}
          type="text" 
          className='registerInput' 
          placeholder='Enter your email...' />
          <label>Password</label>
          <input value={password} 
          onChange={e => setPassword(e.target.value)}
          type="password" 
          className='registerInput' 
          placeholder='Enter your password...' />
          <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'>Login</button>
      </div>
    </>
  );
}

export default Register;