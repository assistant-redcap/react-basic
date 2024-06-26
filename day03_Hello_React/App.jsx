import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("안녕 리액트");

  return (
    <>
      <p>message: {message}</p>
    </>
  );
}
