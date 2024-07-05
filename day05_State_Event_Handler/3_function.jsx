import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("안녕");

  function handleClick(newMessage) {
    setMessage(newMessage);
  }

  return (
    <>
      <p>message: {message}</p>
      <button onClick={() => handleClick("잘가")}>잘가</button>
    </>
  );
}