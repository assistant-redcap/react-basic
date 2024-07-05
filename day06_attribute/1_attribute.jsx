import { useState } from "react";

export default function App() {
  const [hintText, setHintText] = useState("아이디를 입력해!");

  return (
    <>
      <p>Attribute 변수화</p>
      <input type="text" placeholder={hintText} />
    </>
  );
}