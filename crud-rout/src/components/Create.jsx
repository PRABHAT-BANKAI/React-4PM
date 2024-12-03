import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
    let obj = { email, name };
    axios
      .post("http://localhost:3000/userData", obj)
      .then((response) => {
        console.log(response);
        alert("User created successfully");
        setName("");
        setEmail("");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to create user");
        setName("");
        setEmail("");
      });
  }
  return (
    <div>
      <h1>Create User</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
