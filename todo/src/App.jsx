import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Todolist from "./components/Todolist";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about/:id",
      element: <About />,
    },
  ]);

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Todolist />
    </>
  );
}

export default App;
