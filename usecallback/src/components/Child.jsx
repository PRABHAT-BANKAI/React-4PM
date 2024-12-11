import React, { memo } from "react";

const Child = ({ count2Inc }) => {
  console.log("child rendering");
  return (
    <div>
      <button onClick={count2Inc}>Count 2 Inc</button>
    </div>
  );
};

export default memo(Child);
