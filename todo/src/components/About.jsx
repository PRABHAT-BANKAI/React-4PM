import React from "react";
import { Link, useParams } from "react-router-dom";

const About = () => {
  const { id } = useParams();

  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <h1>About Page</h1>
      <p>{id}</p>
    </div>
  );
};

export default About;
