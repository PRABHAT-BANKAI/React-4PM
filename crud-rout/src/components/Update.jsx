import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  function handleUpdate(event) {
    event.preventDefault();
    let obj = { email, name };
    axios
      .put(`http://localhost:3000/userData/${id}`, obj)
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

  useEffect(() => {
    axios.get(`http://localhost:3000/userData/${id}`).then((response) => {
      console.log(response);
      setName(response.data.name);
      setEmail(response.data.email);
    });
  }, []);

  return (
    <div>
      <h1>Update User</h1>
      <form action="" onSubmit={handleUpdate}>
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

export default Update;
