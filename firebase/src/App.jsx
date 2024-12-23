import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Register from "./component/Register";
import Home from "./component/Home";
import LoginPage from "./component/LoginPage";

function App() {
  return (
    <>
      <nav>
        <Link to={"/"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </nav>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/register" Component={Register} />
        <Route path="/home" Component={Home} />
      </Routes>
    </>
  );
}

export default App;
