import "./App.css";
import HOC from "./compoenents/Counter";
import React, { useState } from "react";
import {  createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./compoenents/Home";
import About from "./compoenents/About";

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   function show() {
//     console.log("145");
//   }

//   return (
//     <div>
//       <p>Counter:{count}</p>
//       <button onClick={() => setCount(count + 1)}>Inc</button>
//       <button onClick={() => setCount(count - 1)}>Dec</button>
//     </div>
//   );
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <>
    
      {/* <HOC Counter={Counter()} color={"red"} />
      <HOC Counter={Counter()} color={"green"} /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
