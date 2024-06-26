import { useState } from "react";

export default function Header({ addTodo }) {
  const [inputTitle, setInputTitle] = useState("");

  function handleAdd() {
    if (!inputTitle || inputTitle.trim() === "") return;
    addTodo(inputTitle);
    setInputTitle("");
  }
  return (
    <>
      <input
        type="text"
        className="border border-black p-2"
        placeholder="할 일을 입력하세요"
        value={inputTitle}
        onChange={(event) => setInputTitle(event.target.value)}
        onKeyUp={(event) => event.key === "Enter" && handleAdd()}
      />
      <button
        className="border border-black p-2 hover:bg-blue-500 hover:text-white"
        onClick={handleAdd}
      >
        추가
      </button>
    </>
  );
}
