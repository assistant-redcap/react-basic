import { useState } from "react";

export default function App() {
  const [message1, setMessage1] = useState("안녕");
  let message2 = "안녕";

  return (
    <>
      <p>message1: {message1}</p>
      <button onClick={() => setMessage1("잘가")}>잘가</button>
      <p>message2: {message2}</p>
      <button
        onClick={() => {
          message2 = "잘가";
          console.log(message2);
        }}
      >
        이건 변할까?
      </button>
    </>
  );
}