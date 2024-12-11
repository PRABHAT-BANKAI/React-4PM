import { useCallback, useState } from "react";
import Child from "./components/Child";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("parent render");

  const count2Inc = useCallback(() => {
    console.log("function render");
    setCount2(count2 + 1);
  },[]);

  return (
    <>
      <h1>useCallBack</h1>
      <p>count1 {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>inc count1</button>

      <p>Count 2 : {count2}</p>
      <Child count2Inc={count2Inc} />
    </>
  );
}

export default App;
