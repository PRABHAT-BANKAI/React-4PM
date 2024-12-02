import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/userData").then((response) => {
      console.log(response);
      setUserData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <Link to={"/create"}>
        <button>Create user</button>
      </Link>
      <table border="">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/update/${user.id}`}>
                      <button>Edit</button>
                    </Link>
                    <Link to={`/delete/${user.id}`}>
                      <button>Delete</button>
                    </Link>
                    <Link to={`/read/${user.id}`}>
                      <button>Read</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
