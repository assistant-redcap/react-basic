import { useState } from "react";

export default function App() {
  const [text, setText] = useState("안녕");

  return (
    <>
      <p>{text}</p>
      {/* <button onClick={setText("잘가")}>글자 변경</button> */}
      <button onClick={() => setText("잘가")}>글자 변경</button>
    </>
  );
}