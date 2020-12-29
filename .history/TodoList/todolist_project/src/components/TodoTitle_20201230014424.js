import React from 'react';
import styled from 'styled-components';

const TodoTitleBlock = styled.div`


`
function TodoTitle(){
    return(
        <TodoTitleBlock>
            <h2>Todo List</h2>
        </TodoTitleBlock>
    )
}

export default TodoTitle;