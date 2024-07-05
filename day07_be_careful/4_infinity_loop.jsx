import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  function getData() {
    // 데이터 패치...
    setData([1, 2, 3]);
  }

  // 무한루프의 영역
  getData();

  return (
    <>
      <p>{data}</p>
      <button onClick={() => getData()}>데이터 다시 받아오기</button>
    </>
  );
}