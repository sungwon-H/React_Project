import React from 'react';
import styled from 'styled-components';
import TodoTitle from './TodoTitle';
const TodoHeadBlock = styled.div`
    height:200px;
    padding-top:10px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    border: 1px solid black;
`;


function TodoHead() {
    return(
        <TodoHeadBlock>
            <TodoTitle/>
        </TodoHeadBlock>
    );
}

export default TodoHead;