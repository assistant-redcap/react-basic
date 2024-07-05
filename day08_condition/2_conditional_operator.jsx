import { useState } from "react";

export default function App() {
  const [isTeacher, setIsTeacher] = useState(true);
  
  return (
    <>
      {isTeacher ? <p>안녕하세요 쌤</p> : <p>누구십니까</p>}
    </>
  );
}