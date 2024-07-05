import CommonButton from "./components/common/CommonButton";

export default function App() {
  return (
    <>
      <h1>App</h1>
      <CommonButton text="로그인" handleClick={() => console.log("로그인")} />
      <CommonButton text="회원가입" handleClick={() => alert("회원가입")} />
    </>
  );
}
