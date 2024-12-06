import { useState } from "react";
import Show from "./components/Show";

function App() {
  let [state, setState] = useState(0);
  let [data, setData] = useState({
    name: "John Doe",
    age: 30,
    email: "john@doe",
    phone: 21345677,
  });

  function handleAdd() {
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
  }

  return (
    <>
      <h1>React </h1>
      <p>State and props</p>
      <p>{state}</p>
      <button onClick={handleAdd}>inc</button>
      <Show
        name={data.name}
        age={data.age}
        number={data.phone}
        email={data.email}
        count={state}
      
      />
    </>
  );
}

export default App;
