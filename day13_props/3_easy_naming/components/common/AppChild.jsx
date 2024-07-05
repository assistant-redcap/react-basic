import GrandChild from "./GrandChild";

export default function AppChild({ name, age }) {
  return (
    <>
      <h2>AppChild</h2>
      <p>{name}</p>
      <p>{age}</p>
      <GrandChild />
    </>
  );
}
