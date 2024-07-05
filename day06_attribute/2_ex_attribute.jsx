import { useState } from "react";

export default function App() {
  const [inputType, setInputType] = useState("text");
  const [hintText, setHintText] = useState("아이디를 입력해!");

  return (
    <>
      <p>Attribute 변수화</p>
      <input type={inputType} placeholder={hintText} />
      <div>
        <button
          onClick={() => {
            setInputType("text");
            setHintText("아이디를 입력하세요");
          }}
        >
          아이디
        </button>
        <button
          onClick={() => {
            setInputType("password");
            setHintText("비밀번호를 입력하세요");
          }}
        >
          비밀번호
        </button>
      </div>
    </>
  );
}
