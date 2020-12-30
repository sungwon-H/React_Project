import React from 'react';
import styled from 'styled-components';
import {MdStar} from 'react-icons/md';

const TodoTaskBlock = styled.div`
display:flex;
justify-content: space-between;

.tasks-important{
    font-size: 21px;
    font-weight:bold;
    color: #323232; 
    display: flex;
    align-items: center;
    justify-content: center;
    
}


.tasks-left{
    font-size: 21px;
    font-weight:bold;
    color: #F49F5B;
    
}
`
function TodoTask(){
    return(
        <TodoTaskBlock>
            <div className="tasks-important">
            <MdStar font-size="25px" color= "#f0f351"/> 0
                </div>
            <div className="tasks-left">남은 할 일 x 개</div>
        </TodoTaskBlock>
    )
}
export default TodoTask;