import React, {useReducer, createContext, useContext, useRef} from 'react';

const initialTodos = [
    {
      id: 1,
      text: '프로젝트 생성하기',
      done: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링하기',
      done: true
    },
    {
      id: 3,
      text: 'Context 만들기',
      done: false
    },
    {
      id: 4,
      text: '기능 구현하기',
      done: false
    }
  ];

  function todoReducer(state, action){
      switch (action.type){// action.type에 따라 다른 작업 수행
        case 'CREATE':
              return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => // 반복되는 컴포넌트를 렌더링 map함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후, 그 결과로 새로운 배열을 생성
                todo.id === action.id ? {...todo, done: !todo.done}:todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
      }
  }

  const TodoStateContext = createContext();
  const TodoDispatchContext = createContext();
  const TodoNextIdContext = createContext();
 
export function TodoProvider({children}){
  
      const [state, dispatch] = useReducer(todoReducer, initialTodos); // state는 현재를 가리키고 dispatch는 액션을 발생 시킨다 
      const nextId = useRef(5); // 다음에 만들어지는 nextId는 새로운 항목이 추가될 경우 고유 id가 붙게 된다.
      return(
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
            <TodoNextIdContext.Provider value={nextId}>
              {children}  
            </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      );
  }

  //useContext 커스텀 훅 사용
  export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
      throw new Error('Cannot find TodoProvider');
    }
    return context;
  }
  
  export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if (!context) {
    throw new Error('Cannot find TodoProvider');
    }
  return context;

  }

  export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
  }