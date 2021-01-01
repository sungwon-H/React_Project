import React from 'react';
import styled from 'styled-components';
import {MdStar} from 'react-icons/md';
import { useTodoState } from '../TodoContext';
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
    font-size: 18px;
    font-weight:bold;
    color: #F49F5B;
    
}
`

function TodoTask(){
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);
    const undoneImport = todos.filter(todo => todo.imp)
    return(
        <TodoTaskBlock>
            <div className="tasks-important">
            <MdStar color= "#f0f351"/>{undoneImport.length}
                </div>
            <div className="tasks-left">남은 할 일 {undoneTasks.length} 개</div>
        </TodoTaskBlock>
    )
}
export default TodoTask;