import React from 'react';
import styled,{css} from 'styled-components';
import { MdDone, MdDelete, MdStar } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext'; // 액션 발생

// 삭제
const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
    color: #ff6b6b;
    }
    display:none;
`;

// 중요표시
const Import = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    margin-right: 10px; 
    
    &:hover {
    color: #f0f351;
    }
    display:none;

    ${props =>
      props.imp &&
      css`
        display:block;
        color: #f0f351;
      
        
      `}
`;


// 아이템 블록
const TodoItemBlock = styled.div`
  
  display: flex;
  
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
    
    
  
  
  &:hover {
    ${Remove} {
      display: initial;
    }
    ${Import} {
        display: initial;
        
      }
  }

`;
//체크버튼 
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  
  &:hover{
    background:#f8f9fa;
  }
  transition: 0.125s all ease-in;
  ${props =>
    props.done &&
    css`
      border-radius: 16px;
      background: #ffd43b;
      border: 1px solid #ffd43b;
      
    `}

`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  
  ${props =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;




function TodoItem({id, imp, done, text,}){
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onImport = () => dispatch({ type: 'IMPORT', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

    return(
     
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>
              {done && <MdDone/>}
              </CheckCircle>

            <Text done={done}>{text}</Text>

            <Import imp={imp} onClick={onImport}>
                <MdStar/>
            </Import>

            <Remove onClick={onRemove}>
                <MdDelete/>
            </Remove>

        </TodoItemBlock>
        
    )
}

export default TodoItem;