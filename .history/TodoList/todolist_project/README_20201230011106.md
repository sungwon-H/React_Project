## TodoList 미니 프로젝트

---
<br>

### 목차
1. [TodoList구상도]
2. [TodoList 컴포넌트](#todolist-제작-컴포넌트)
    1. [Todo Template 생성](#todo-template-생성)
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
    - TodoTitle : TodoList 제목
    - Todo date : 오늘 날짜와 요일 및 남은 할일 개수 표시
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
        margin-top: 96px;
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
        );
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