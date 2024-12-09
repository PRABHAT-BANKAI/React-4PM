import { useMemo, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [count, setCount] = useState(1);
  console.log("parent");

  let sum = useMemo(
    function () {
      console.log("sum render");
      return input1 + input2;
    },
    [input1, input2]
  );

  return (
    <>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(Number(e.target.value))}
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(Number(e.target.value))}
      />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}> adding</button>

      <p>{sum}</p>
    </>
  );
}

export default App;
