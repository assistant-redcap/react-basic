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
      <AppChild name={name} age={age} />
    </>
  );
}
