import React from 'react';
import styled from 'styled-components';

const TodoTitleBlock = styled.div`
   
    border: 1px solid black;
    text-align: center;
    

`
function TodoTitle(){
    return(
        <TodoTitleBlock>
            <h2>Todo List</h2>
        </TodoTitleBlock>
    )
}

export default TodoTitle;