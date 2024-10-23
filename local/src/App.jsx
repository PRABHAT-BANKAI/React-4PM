import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("text")) || 0
  );

  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(count));

    return()=>{
      
    }
  }, [count]);

  return (
    <>
      <h1>Count:{count}</h1>
      <button disabled={count == 0} onClick={() => setCount(count - 1)}>
        decrement
      </button>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  );
}

export default App;
