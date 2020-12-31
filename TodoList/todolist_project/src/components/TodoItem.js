import React from 'react';
import styled,{css} from 'styled-components';
import { MdDone, MdDelete, MdStar } from 'react-icons/md';


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
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  ${props =>
    props.done &&
    css`
     
      border: 1px solid #38d9a9;
      color: #38d9a9;
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



function TodoItem({id, done, text}){
    return(
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Import>
                <MdStar/>
            </Import>
            <Remove>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem;