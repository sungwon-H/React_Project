import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead'
import TodoList from './components/TodoList';
import {TodoProvider} from './TodoContext';


const GlobalStyle = createGlobalStyle`
    body {
      background: #f1f3f5;
    }
`;

function App(){
  return(
    <TodoProvider>
    <GlobalStyle/>
    <TodoTemplate>
      <TodoHead/>
      <TodoList/>
    </TodoTemplate>
    </TodoProvider>
  );
}

export default App;