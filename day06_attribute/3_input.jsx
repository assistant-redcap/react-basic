import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userNum, setUserNum] = useState(0);
  const [isJob, setIsJob] = useState(false);
  const [selectedColor, setSelectedColor] = useState("컬러 미선택");
  const [position, setPosition] = useState("student");

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <p>{username}</p>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <p>{password}</p>
      <input
        type="number"
        value={userNum}
        onChange={(event) => setUserNum(event.target.value)}
      />
      <p>{userNum}</p>
      <p>직업여부</p>
      <input
        type="checkbox"
        checked={isJob}
        onChange={(event) => setIsJob(event.target.checked)}
      />
      <p>{`${isJob}`}</p>
      <input
        type="radio"
        name="color"
        value="red"
        onChange={(event) => setSelectedColor(event.target.value)}
      />
      빨강
      <input
        type="radio"
        name="color"
        value="blue"
        onChange={(event) => setSelectedColor(event.target.value)}
      />
      파랑
      <p>{selectedColor}</p>
      <select onChange={(event) => setPosition(event.target.value)}>
        <option value="student">학생</option>
        <option value="teacher">선생</option>
      </select>
      <p>{position}</p>
    </>
  );
}
