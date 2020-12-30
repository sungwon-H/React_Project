## TodoList 미니 프로젝트

---
<br>

### 목차
1. [TodoList구상도]
2. [TodoList 컴포넌트](#todolist-제작-컴포넌트)
    1. [Todo Template 생성](#todo-template-생성)
    2. [Todo Head생성](#todo-head-생성)
    3. [Todo List생성](#todo-list-생성)
3. [TodoList 기능 구현]
---
### TodoList 구상도

<br>

**블로그 및 노션 확인**

<br>

---
<br>

### TodoList 제작 컴포넌트

- Todo Template : Todo List의 레이아웃을 설정하는 컴포넌트 페이지 중앙에 배경 박스
- Todo Head:  Template 안에 상단 오른쪽에 날짜와 시간 요일 남은 할 일 표시
    - Todo date : 오늘 날짜
    - TodoTitle : TodoList 제목
    - Todo Task : 중요한 일 및 남은 일
    - TodoCreate : 새로운 일을 등록하는 컴포넌트
- Todo List : 할 일에 대한 정보 template 중앙 위치
    - TodoItem : Todo List에 보여지는 할 일을 하나씩 세세하게 표현

---
<br>

### App.js 배경 설정

- styled-components를 글로벌 스타일로 추가하여 생성

    ```jsx
    import { createGlobalStyle } from 'styled-components';
    ```

- App.js

    ```jsx
    import React from 'react';
    import { createGlobalStyle } from 'styled-components';

    const GlobalStyle = createGlobalStyle`
      body {
        background: #e9ecef;
      }
    `;

    function App() {
      return (
        <>
          <GlobalStyle />
          <div>TodoList 만들기 </div>
        </>
      );
    }

    export default App;
    ```

---
<br>

## Todo Template 생성


- 중앙에 흰색 배경의 박스 생성

---
<br>

- **TodoTemplate.js**

    ```jsx
  import React from 'react';
  import styled from 'styled-components';

  const TodoTemplateBlock = styled.div`

      width: 512px;
      height: 768px;
      margin: 0 auto;
      margin-top: 200px;
      margin-bottom: 32px;
      background: white;
      display: flex;
      flex-direction: column;
      border-radius: 16px;
      box-shadow: 5px 5px 5px 5px  #787878;

  `;

  function TodoTemplate({children}){
      return(
          <TodoTemplateBlock>
              {children}
          </TodoTemplateBlock>
      )
  }

  export default TodoTemplate;
    ```

- **App.js**

    ```jsx
    import React from 'react';
    import {createGlobalStyle} from 'styled-components';
    import TodoTemplate from './components/TodoTemplate';

    const GlobalStyle = createGlobalStyle`
        body {
          background: #FDF5E6;
        }
    `;

    function App(){
      return(
        <>
        <GlobalStyle/>
        <TodoTemplate>
        <div>TodoList 시작 </div>
        </TodoTemplate>
        
        </>
      );
    }

    export default App;
    ```

---
<br>

### Todo Head 생성

- 이 컴포넌트에서 제목,시간, 요일, 남은 할 일 개수, 할일생성를 표현한다.
- TodoDate: 현재 날짜
- TodoTitle : 제목
- TodoTasksleft&important:
    - TodoImportant: 중요한 일 갯수
    - TodoTaskleft: 남은 할일
- TodoCreate: 할일 생성

---



- **TodoHead.js**

    ```jsx
    import React from 'react';
    import styled from 'styled-components';
    import TodoDate from './TodoDate';
    import TodoTitle from './TodoTitle';
    import TodoTask from './TodoTask';
    import TodoCreate from './TodoCreate';

    const TodoHeadBlock = styled.div`
        
        height:280px;
        padding-top:10px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #c8c8c8;
    `;

    function TodoHead() {
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
    ```

    - 각 컴포넌트 불러오기

        ```jsx
        import React from 'react';
        import styled from 'styled-components';
        import TodoDate from './TodoDate';
        import TodoTitle from './TodoTitle';
        import TodoTask from './TodoTask';
        import TodoCreate from './TodoCreate';
        ```

    - TodoHeadBlock 스타일 컴포넌트 사용

        ```jsx
        const TodoHeadBlock = styled.div`
            
            height:280px;
            padding-top:10px;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #c8c8c8;
        `;
        ```

    - 컴포넌트 렌더 및 전역선언

        ```jsx
        function TodoHead() {
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
        ```

    ---

    - **TodoDate.js**

        ```jsx
        import React from 'react';
        import "./TodoDate.scss";

        function TodoDate(){
            return(
                
                    <div className="TodoDate">0000년 00월 00일</div>
               
                
            )
        }

        export default TodoDate;
        ```

        - 리액트 선언 및 scss 연결

            ```jsx
            import React from 'react';
            import "./TodoDate.scss";

            ```

        - 렌더링 및 전역선언

            ```jsx
            function TodoDate(){
                return(
                    
                        <div className="TodoDate">0000년 00월 00일</div>
                   
                    
                )
            }

            export default TodoDate;
            ```

    - **TodoDate.scss**

        ```jsx
        @import url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,700;1,400;1,700&display=swap');

        .TodoDate{
               width: 150px;
               height: 25px;
               margin-bottom: 10px;
               
               font-family: 'Philosopher', sans-serif;
        }
        ```

        - 글꼴은 @import 로 사용

    ---

    - **TodoTitle.js**

        ```jsx
        import React from 'react';
        import "./TodoTitle.scss";

        function TodoTitle(){
            return(
                
                    <div className="TodoTitle">TO DO LIST</div>
                
            )
        }

        export default TodoTitle;
        ```

        - 리액트 선언 및 scss 연결

            ```jsx
            import React from 'react';
            import "./TodoTitle.scss";
            ```

        - 렌더 및 전역선언

            ```jsx
            function TodoTitle(){
                return(
                    
                        <div className="TodoTitle">TO DO LIST</div>
                    
                )
            }

            export default TodoTitle;
            ```

    - **TodoTitle.scss**

        ```jsx
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

        .TodoTitle{
               
                text-align: center;
                font-family: 'Anton', sans-serif;
                font-size: 40px;
                
                color:#99e9f2;
                margin-bottom: 19px;
        }
        ```

    ---

    - **TodoTask.js**

        ```jsx
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
        ```

        - 리액트 선언 및 스타일 컴포넌트, 아이콘 모듈 사용

            ```jsx
            import React from 'react';
            import styled from 'styled-components';
            import {MdStar} from 'react-icons/md';
            ```

        - 스타일 컴포넌트

            ```jsx
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
            ```

            - .tasks-important: 중요한 일 표시
            - .tasks-left: 남은 할 일 표시

        - 랜더 및 전역함수

            ```jsx

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
            ```

            - TodoTaskBlock 테두리
            - Mdstar는 이모티콘

    ---

- **TodoCreate.js**

    ```jsx
    import React, {useState} from 'react';
    import styled, {css} from 'styled-components';
    import {MdAdd} from 'react-icons/md';

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

        const onToggle = () => setOpen(!open);
        return(
        <>
        {open &&(
            <InsertFormPositioner>
                <InsertForm>
                <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
                </InsertForm>
            </InsertFormPositioner>
        )}
        
        <CircleButton onClick={onToggle} open={open}>
            <MdAdd/>
          </CircleButton>
        </>

    );
    }

    export default TodoCreate;
    ```

    - 리액트 사용 및 모듈 사용

        ```jsx
        import React, {useState} from 'react';
        import styled, {css} from 'styled-components';
        import {MdAdd} from 'react-icons/md';
        ```

    - 버튼 스타일 컴포넌트

        ```jsx
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
        ```

        - 버튼 배경색 및 마우스 갖다 대거나 클릭한 경우 색상 효과

            ```jsx
             background: #F49551;
                &:hover { 
                background: #F5AF64;
                transform: rotate(45deg); // 회전 효과
                }
                &:active {
                background: #F49551;
                }

            ```

        - 버튼 디자인

            ```jsx
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
            ```

        - 버튼에 + 위치 조정

            ```jsx
             // 아이콘 + 위치
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 0.125s all ease-in; // 모양변화속도

            ```

        - props로 open이 발동된 경우의 css

            ```jsx
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
            ```

    - 입력 창 스타일 컴포넌트

        ```jsx
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

        ```

        - 1번 테두리 설정

            ```jsx
            const InsertFormPositioner = styled.div` // 입력 폼 1번째 
                display:flex;
                width: 383px;
                top:395px;
                position: absolute;
            `;
            ```

        - 2번 테두리 설정

            ```jsx
            const InsertForm = styled.form` // 입력폼 2번째
               
                
                background: #f8f9fa;
                padding-right:10px;
                padding-left:10px;
                padding-top: 12px;
                padding-bottom: 12px;
                border-radius: 5%;

            `;
            ```

        - 3번 테두리 (실제 입력 란)

            ```jsx
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

            ```

    - 렌더 함수

        ```jsx
        function TodoCreate(){
            const [open, setOpen] = useState(false); 

            const onToggle = () => setOpen(!open);
            return(
            <>
            {open &&(
                <InsertFormPositioner>
                    <InsertForm>
                    <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd/>
              </CircleButton>
            </>

        );
        }

        export default TodoCreate;
        ```

        - UseState 사용

            ```jsx
              const [open, setOpen] = useState(false); 

                const onToggle = () => setOpen(!open);
            ```

        - 리턴 렌더

            ```jsx
            return(
                <>
                {open &&(
                    <InsertFormPositioner>
                        <InsertForm>
                        <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
                        </InsertForm>
                    </InsertFormPositioner>
                )}
                
                <CircleButton onClick={onToggle} open={open}>
                    <MdAdd/>
                  </CircleButton>
                </>

            );
            ```

            - 버튼 클릭시 onToggle 상수 발생 open 실행


---
<br>

### Todo List 생성

- 이 컴포넌트 에서는 생성된 할 일 리스트를 보여주고 리스트의 각 아이템 마다 체크, 중요표시, 제거 등 디자인을 구현한다.
- TodoList: 생성된 리스트 정렬
- TodoItem : 리스트안에 담겨 있는 아이템

---

- **TodoList.js**

    ```jsx
    import React from 'react';
    import styled from 'styled-components';
    import TodoItem from './TodoItem';
    const TodoListBlock= styled.div`
        border: 1px solid black;
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
    ```

    - 리액트 선언 및 스타일 컴포넌트 라이브러리, 컴포넌트 연결

        ```jsx
        import React from 'react';
        import styled from 'styled-components';
        import TodoItem from './TodoItem';
        ```

    - TodoListBlock 디자인

        ```jsx
        const TodoListBlock= styled.div`
            border: 1px solid black;
            flex: 1; // 해당 태그가 차지할 수 있는 영역을 꽉 채우도록 설정
            padding: 20px 32px;
            padding-bottom: 48px;
            overflow-y: auto; // 내용이 넘칠때 어떻게 보일지
        `;
        ```

    - 렌더 화면

        ```jsx
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
        ```

        - TodoListBlcok 안에 TodoItem 컴포넌트 적용

---

- **TodoItem.js**

    ```jsx
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
      border:1px solid black;
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
    ```

    - 리액트 사용 및 스타일 컴포넌트, 리액트 아이콘 모듈 사용

        ```jsx
        import React from 'react';
        import styled,{css} from 'styled-components';
        import { MdDone, MdDelete, MdStar } from 'react-icons/md';
        ```

    - 삭제 버튼 스타일 컴포넌트 디자인

        ```jsx
        // 삭제
        const Remove = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            color: #dee2e6; // 기본색상
            font-size: 24px;
            cursor: pointer;
            &:hover {
            color: #ff6b6b; // 마우스 커서가 가리킬때 색상변화
            }
            display:none; // 
        `;
        ```

    - 중요표시 버튼

        ```jsx
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
        ```

    - 아이템 블록

        ```jsx
        const TodoItemBlock = styled.div`
          border:1px solid black;
          display: flex;
          align-items: center;
          padding-top: 12px;
          padding-bottom: 12px;
          &:hover {
            ${Remove} {
              display: initial; // 아이템에 마우스 커서가 가리키면 다시 보여줌 
            }
            ${Import} {
                display: initial;
              }
          }

        `;
        ```

    - 체크버튼

        ```jsx
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

        ```

        - props를 사용하여 체크 시 색상변경

    - 텍스트 문구 작성

        ```jsx

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
        ```

        - props를 사용함 텍스트를 클릭하면 텍스트 가운데 줄

    - 렌더 및 전역 선언

        ```jsx
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
        ```

        - CheckCircle: 클릭 시 색 변화 설정
        - Text: done 설정으로 클릭 시 변화 줌

---