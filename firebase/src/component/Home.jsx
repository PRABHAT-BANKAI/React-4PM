import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function handleOut() {
    signOut(auth)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to signout");
      });
  }
  return (
    <div>
      Home
      <button onClick={handleOut}>Signout</button>
    </div>
  );
};

export default Home;
