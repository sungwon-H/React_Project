import React from 'react';
import styled from 'styled-components';

const TodoTitleBlock = styled.div`
    @font-face{
        font-family:"CookieRun Bold";
        font-weight: 200;
        src:url("../fonts/CookieRun Bold.ttf)format('truetype');
        src:url("../fonts/CookieRun Bold.ttf)format('woff');
        src:url("../fonts/CookieRun Bold.ttf)format('woff2');
    }
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