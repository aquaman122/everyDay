import React, { useState } from 'react';
import { authService } from '../fBase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { async } from '@firebase/util';

const Auth = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const { email, password } = inputs;
  const [newAccount, setNewAccount] = useState(true);
  const onChagne = e => {
    const {target: {name, value}} = e;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const onSubmit = async(e) => {
    e.preventDefault();
    try {
      let data;
      const auth = getAuth();
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error)  {
      console.log(error);
    }
  }
  return (
  <>
    <form onSubmit={onSubmit}>
      <input name='email' type='text' placeholder='Email' value={email} onChange={onChagne} required/>
      <input name='password' type='password' placeholder='Password' value={password} onChange={onChagne} required />
      <input type='submit' value={newAccount ? 'Create Account' : "Log In"} />
    </form>
    <div>
      <button>Continue with Google</button>
      <button>Continue with Github</button>
    </div>
  </>
  )
};

export default Auth;