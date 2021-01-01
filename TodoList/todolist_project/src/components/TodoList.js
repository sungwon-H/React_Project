import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock= styled.div`    
    flex: 1; // 해당 태그가 차지할 수 있는 영역을 꽉 채우도록 설정
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
  
    
   
`;


function TodoList(){
    const todos = useTodoState();

    return(
        <TodoListBlock>
            
            {todos.map(todo => (
                <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
                imp={todo.imp}
            />
            ))}
         
        </TodoListBlock>
    );
}

export default TodoList;