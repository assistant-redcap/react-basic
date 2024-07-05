import { useState } from "react";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isAllPrint, setIsAllPrint] = useState(true);
  const [todos, setTodos] = useState([
    { id: 123, title: "밥먹기", isCompleted: false },
    { id: 456, title: "영화보기", isCompleted: false },
    { id: 789, title: "게임하기", isCompleted: false },
  ]);

  const filteredTodos = isAllPrint
    ? todos
    : todos.filter((todo) => !todo.isCompleted);

  function changeTodos(targetTodo) {
    const newTodos = todos.map((todo) => {
      if (todo.id === targetTodo.id) {
        todo.isCompleted = !todo.isCompleted;
        return todo;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  return (
    <>
      {isLogin ? (
        <>
          <ul>
            {filteredTodos.map((todo) => (
              <li key={todo.id}>
                <p>{todo.title}</p>
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => changeTodos(todo)}
                />
              </li>
            ))}
          </ul>
          <button onClick={() => setIsAllPrint(!isAllPrint)}>
            {isAllPrint ? "완료된 항목 숨기기" : "전체 출력"}
          </button>
        </>
      ) : (
        <>
          <p>아직 로그인하지 않았습니다.</p>
          <button onClick={() => setIsLogin(true)}>로그인</button>
        </>
      )}
    </>
  );
}
