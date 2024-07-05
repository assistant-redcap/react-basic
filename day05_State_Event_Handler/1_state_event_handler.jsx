import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("안녕");

  return (
    <>
      <p>message: {message}</p>
      <button onClick={() => setMessage("잘가")}>잘가</button>
    </>
  );
}
