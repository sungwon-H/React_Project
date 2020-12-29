import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`

    width: 512px;
    height: 768px;
    margin: 0 auto;
    margin-top: 200px;
    border: 1px solid black;
    margin-top: 96px;
    margin-bottom: 32px;
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

`;

function TodoTemplate({children}){
    return(
        <TodoTemplateBlock>
            {children}
        </TodoTemplateBlock>
    )
}

export default TodoTemplate;