import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Read = () => {
  const [userSingleData, setSingleData] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/userData/${userId}`).then((response) => {
      setSingleData(response.data);
      console.log(response.data); // to see the fetched data in console.log
    });
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {userSingleData.name}</p>
      <p>Email: {userSingleData.email}</p>
    </div>
  );
};

export default Read;

// create read file with your own
