import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
    body {
      background: #FDF5E6;
    }
`;

function App(){
  return(
    <>
    <GlobalStyle/>
    <TodoTemplate>
      <TodoHead/>
    </TodoTemplate>
    
    </>
  );
}

export default App;