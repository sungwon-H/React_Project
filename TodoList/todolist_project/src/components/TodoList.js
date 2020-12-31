import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
const TodoListBlock= styled.div`
    
    flex: 1; // 해당 태그가 차지할 수 있는 영역을 꽉 채우도록 설정
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
   
`;

function TodoList(){
    return(
        <TodoListBlock>
             <TodoItem text="두두등장" done={true} />
             <TodoItem text="내일까지 마무리" done={true} />
             <TodoItem text="얼른 해야함" done={true} />
             <TodoItem text="고고고고고고고고" done={true} />
        </TodoListBlock>
    );
}

export default TodoList;