import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [nextIdx, setNextIdx] = useState(1);
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   title: "밥먹기",
    //   isCompleted: false,
    // },
  ]);

  function addTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextIdx,
        title: title,
        isCompleted: false,
      },
    ]);
    setNextIdx(nextIdx + 1);
  }

  function deleteAllTodos() {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(newTodos);
  }

  function changeChecked(targetId) {
    const newTodos = todos.map((todo) => {
      if (todo.id === targetId) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function deleteTodo(targetId) {
    const newTodos = todos.filter((todo) => todo.id !== targetId);
    setTodos(newTodos);
  }

  return (
    <>
      <h1 className="text-3xl text-center text-blue-500 font-bold my-5">
        Todo List
      </h1>
      <header className="ml-5">
        <Header addTodo={addTodo} />
      </header>
      <main>
        <Main
          todos={todos}
          changeChecked={changeChecked}
          deleteTodo={deleteTodo}
          deleteAllTodos={deleteAllTodos}
        />
      </main>
    </>
  );
}
