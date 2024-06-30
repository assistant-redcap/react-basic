import { useState } from "react";

export default function App() {
  const [text1, setText1] = useState("???");
  const [text2, setText2] = useState("???");

  return (
    <>
      <p>{text1}</p>
      <p>{text2}</p>
      <button onClick={() => {
        setText1("짜잔");
        setText2(text1);
      }}>둘 다 변경</button>
    </>
  );
}