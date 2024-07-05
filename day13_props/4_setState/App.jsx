import { useState } from "react";
import AppChild from "./components/common/AppChild";

export default function App() {
  const [name, setName] = useState("조교행님");
  const [age, setAge] = useState(40);

  return (
    <>
      <h1>App</h1>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={() => setAge(age - 1)}>나이를 줄이자</button>
      <AppChild name={name} age={age} handleAge={(newAge) => setAge(newAge)} />
    </>
  );
}
