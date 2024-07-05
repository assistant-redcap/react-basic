import { useState } from "react";

export default function App() {
  const [job, setJob] = useState("선생");

  let content;

  if (job === "선생") {
    content = <p>안녕하세요 쌤</p>;
  } else if (job === "학생") {
    content = <p>안녕 얘들아!</p>;
  } else {
    content = <p>누구십니까?</p>;
  }

  return (
    <>
      {content}
    </>
  );
}
