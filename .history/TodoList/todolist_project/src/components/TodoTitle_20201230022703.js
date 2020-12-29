import React from 'react';
import styled from 'styled-components';
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700,700i&display=swap");
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