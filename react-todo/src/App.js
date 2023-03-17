import './App.css';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './component/todoTemplate/TodoTemplate';
import TodoHead from './component/todoHead/TodoHead';
import TodoList from './component/todoList/TodoList';
import TodoCreate from './component/todoCreate/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
