import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      console.log(res);
      alert("Login successful");
      navigate("/home");
    });
  }
  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
