import React from 'react';
import styled from 'styled-components';
import TodoDate from './TodoDate';
import TodoTitle from './TodoTitle';
import TodoTask from './TodoTask';
import TodoCreate from './TodoCreate';
import { useTodoState } from '../TodoContext';
const TodoHeadBlock = styled.div`
    
    height:280px;
    padding-top:10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #c8c8c8;
`;

function TodoHead() {
    const todos = useTodoState();
    console.log(todos);
    return(
        <TodoHeadBlock>
            <TodoDate/>
            <TodoTitle/>
            <TodoTask/>
            <TodoCreate/>
        </TodoHeadBlock>
    );
}

export default TodoHead;