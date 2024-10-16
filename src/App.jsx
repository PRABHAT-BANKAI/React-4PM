import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitData, setSubmitData] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (validation()) {
      let userData = {};

      userData.email = email;
      userData.password = password;
      console.log(userData);
      setSubmitData(userData);
    }

    setEmail("");
    setPassword("");

    function validation() {
      let obj = {};
      let validate = true;
      if (!email.trim()) {
        obj.email = "invalid email";
        validate = false;
      }
      if (!password.trim()) {
        obj.password = "invalid password";
        validate = false;
      }

      setError(obj);
      return validate;
    }
  }

  return (
    <>
      <h1>Form Validation</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {error.email && <span style={{ color: "red" }}>{error.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {error.password && (
            <span style={{ color: "red" }}>{error.password}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {submitData.email && <span>{submitData.email}</span>}
        {submitData.password && <span>{submitData.password}</span>}
      </div>
    </>
  );
}

export default App;
