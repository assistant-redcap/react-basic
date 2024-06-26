export default function Main({
  todos,
  changeChecked,
  deleteTodo,
  deleteAllTodos,
}) {
  return (
    <>
      <div className="m-5">
        {todos.length > 0 ? (
          <>
            <ul>
              {todos.map((todo) => (
                <li key={todo.id} className="m-2">
                  <input
                    type="checkbox"
                    className="m-2"
                    checked={todo.isCompleted}
                    onChange={() => changeChecked(todo.id)}
                  />
                  {todo.isCompleted ? (
                    <>
                      <span className="mr-5 line-through">{todo.title}</span>
                    </>
                  ) : (
                    <>
                      <span className="mr-5">{todo.title}</span>
                    </>
                  )}
                  <button
                    className="border border-black p-1 hover:bg-red-500 hover:text-white"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="border border-black p-1 hover:bg-red-500 hover:text-white"
              onClick={() => deleteAllTodos()}
            >
              완료된 할 일 삭제
            </button>
          </>
        ) : (
          <p>등록된 할 일이 없습니다.</p>
        )}
      </div>
    </>
  );
}
