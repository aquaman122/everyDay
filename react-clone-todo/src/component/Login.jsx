import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineUser, AiFillLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const LoginDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginContainer = styled.div`
  width: 420px;
  height: 580px;

  display:flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 70px;
`;

const LoginHeader = styled.div`
  display:flex;
  justify-content: center;
  font-size: 42px;
  font-family: 'Source Code Pro', monospace;
  font-weight: 500;
  color: #FFA500;
  margin-bottom: 100px;
`
const LoginForm = styled.form`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
`

const LoginField = styled.div`
  width: 350px;
  margin-bottom: 50px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const IdInsert = styled.input`
  width: 320px;
  outline: none;
  border: none;
  margin-left: 5px;
  font-size: 16px
`;

const PwInsert = styled.input`
  width: 320px;
  outline: none;
  border: none;
  margin-left: 5px;
  font-size: 16px
`;

const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  background-color: #FFA500;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

const LoginFooter = styled.div`
  display:flex;
  justify-content: space-between;
`;

const LoginFooterItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
`

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <LoginDiv>
        <LoginContainer>
          <LoginHeader>Todo List</LoginHeader>
          <LoginForm>
            <LoginField>
              <AiOutlineUser />
              <IdInsert onChange={e => setEmail(e.target.value)} placeholder='아이디' value={email}/>
            </LoginField>
            <LoginField>
              <AiFillLock />
              <PwInsert onChange={e => setPassword(e.target.value)} placeholder='비밀번호' value={password}/>
            </LoginField>
            <Link to='/main' style={{textDecoration: 'none'}}>
            <LoginBtn>로그인</LoginBtn>
            </Link>
          </LoginForm>
          <LoginFooter>
            <LoginFooterItems>아이디 찾기</LoginFooterItems>
            <LoginFooterItems>비밀번호 찾기</LoginFooterItems>
            <Link to='/register' style={{textDecoration: 'none'}}>
              <LoginFooterItems>회원가입</LoginFooterItems>
            </Link>
          </LoginFooter>
        </LoginContainer>
      </LoginDiv>
    </>
  );
}

export default Login;