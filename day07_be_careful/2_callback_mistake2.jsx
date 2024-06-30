import { useState } from "react";

export default function App() {
  const [text, setText] = useState("안녕");

  function handleText() {
    setText("잘가");
  }

  return (
    <>
      <p>{text}</p>
      {/* 잘못된 방법 */}
      {/* <button onClick={handleText()}>글자 변경</button> */}

      {/* 올바른 방법 */}
      <button onClick={handleText}>글자 변경</button>

      {/* 더 나은 방법(파라미터도 줄 수 있기 때문) */}
      <button onClick={() => handleText()}>글자 변경</button>
    </>
  );
}