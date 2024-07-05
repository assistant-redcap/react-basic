import GrandChild from "./GrandChild";

export default function AppChild({ name, age, handleAge }) {
  return (
    <>
      <h2>AppChild</h2>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={() => handleAge(1)}>한 살로 변경</button>
      <GrandChild name={name} age={age} />
    </>
  );
}
