import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`

    width: 512px;
    height: 768px;
    margin: 0 auto;
    margin-top: 200px;
    margin-bottom: 32px;
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    box-shadow: 4px 6px 3px 2px  #787878;

`;

function TodoTemplate({children}){
    return(
        <TodoTemplateBlock>
            {children}
        </TodoTemplateBlock>
    )
}

export default TodoTemplate;