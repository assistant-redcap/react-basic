export default function CommonButton({ text, handleClick }) {
  return (
    <>
      <button onClick={() => handleClick()}>{text}</button>
    </>
  );
}
