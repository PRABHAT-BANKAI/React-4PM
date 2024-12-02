import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Read = () => {
  const [userSingleData, setSingleData] = useState();
  const { userId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/userData/`).then((response) => {
      const filterData = response.data.filter((data) => data.id == userId);
      setSingleData(filterData);
    });
  }, []);

  return <div>

  </div>;
};

export default Read;


// create read file with your own
