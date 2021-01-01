import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import {useTodoDispatch, useTodoNextId}from '../TodoContext';
const CircleButton = styled.button`
  
    background: #F49551;
    &:hover { 
    background: #F5AF64;
    transform: rotate(45deg);
    }
    &:active {
    background: #F49551;
    }

   z-index:5;
    width: 40px; // 너비
    height: 40px; // 높이
    font-size: 60px; //  +두께
    color:white;
    border-radius: 50%; // 둥글게
    position: relative; // 아이콘 위치 변경
    top: 20%; // 아이콘 아래로
    left : 90%; // 아이콘 왼쪽으로 90
    border: none; // 테두리x
    outline: none; // 테두리 x

    // 아이콘 + 위치
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.125s all ease-in; // 모양변화속도

    ${props =>
        props.open &&
        css`
          background: #288CFF;
          &:hover {
            background: #50C8FF;
            transform: rotate(45deg);
          }
          &:active {
            background: #288CFF;
          }
          
          border-radius: 10%; // 둥글게

        `}
`;
const InsertFormPositioner = styled.div` // 입력 폼 1번째 
    display:flex;
    width: 383px;
    top:395px;
    position: absolute;
`;

const InsertForm = styled.form` // 입력폼 2번째
   
    
    background: #f8f9fa;
    padding-right:10px;
    padding-left:10px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 5%;

`;
const Input = styled.input` // 3번째 입력폼

  padding-top:10px;
  padding-bottom:10px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 383px;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;


function TodoCreate(){
    const [open, setOpen] = useState(false); 
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
      e.preventDefault(); // 새로고침 방지
      dispatch({
        type: 'CREATE',
        todo: {
          id: nextId.current,
          text: value,
          done: false
        }
      });
      setValue('');
      setOpen(false);
      nextId.current += 1;
    };

    return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;