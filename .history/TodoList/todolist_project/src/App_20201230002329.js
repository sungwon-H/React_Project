import React from 'react';

// 
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
      background: #dcdcdc;
    }
`;

function App(){
  return(
    <>
    <GlobalStyle/>
    <div>안녕하세요</div>
    </>
  )
}

export default App