import { useState } from "react";

export default function App() {
  const [isAllPrint, setIsAllPrint] = useState(true);
  const [students, setStudents] = useState([
    {
      id: 1324,
      name: "조교행님",
      isJob: true,
    },
    {
      id: 3212,
      name: "실비",
      isJob: true,
    },
    {
      id: 7789,
      name: "나나",
      isJob: false,
    },
  ]);

  const filteredStudents = isAllPrint
    ? students
    : students.filter((student) => student.isJob);

  return (
    <>
      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
      <button onClick={() => setIsAllPrint(!isAllPrint)}>
        {isAllPrint ? "취업자만출력" : "전체출력"}
      </button>
    </>
  );
}
