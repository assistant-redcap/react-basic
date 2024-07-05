import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  return (
    <>
      <p>{message}</p>
      <button onClick={() => setMessage("환영합니다")}>로그인</button>
      <button onClick={() => setMessage("안녕히가세요")}>로그아웃</button>
    </>
  );
}