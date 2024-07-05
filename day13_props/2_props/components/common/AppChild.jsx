import GrandChild from "./GrandChild";

export default function AppChild({ propName, propAge }) {
  return (
    <>
      <h2>AppChild</h2>
      <p>{propName}</p>
      <p>{propAge}</p>
      <GrandChild />
    </>
  );
}
