import "./App.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./config/firebase";
import { useEffect, useState } from "react";
import Home from "./components/Home";

function App() {
  let [data, setData] = useState("");

  function GoogleAuth() {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        setData(res.user);
        localStorage.setItem("user", JSON.stringify(res.user));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>{data ? <Home /> : <button onClick={GoogleAuth}>Google Login</button>}</>
  );
}

export default App;
