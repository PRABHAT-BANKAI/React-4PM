import React, { useContext } from "react";
import { userContext } from "./context/context";

const Child = () => {
  let name = useContext(userContext);
  return (
    <div>
      <h1>child components</h1>
      <p>{name}</p>
    </div>
  );
};

export default Child;
