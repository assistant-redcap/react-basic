import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  
  return (
    <>
      {loading && <p>loading...</p>}
    </>
  );
}
