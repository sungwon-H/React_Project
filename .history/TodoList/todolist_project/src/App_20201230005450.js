import React from 'react';

// 
import {createGlobalStyle} from 'styled-components';

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
    <div>안녕하세요</div>
    </TodoTemplate>
    
    </>
  )
}

export default App