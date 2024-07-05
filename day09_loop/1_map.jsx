import { useState } from "react";

export default function App() {
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

  return (
    <>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </>
  );
}
