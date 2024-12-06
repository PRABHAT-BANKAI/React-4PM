import React, { useEffect, useState } from "react";

const Show = ({ name, email, number, age, count }) => {
  const [task, setTask] = useState({ id: 1 });
  //life cycle
  //mount
  // update
  //unmount
  useEffect(() => {
    console.log("mount");
    console.log("update");

    return () => {
      console.log("unmount");
    };
  });
  return (
    <div>
      <p>Name:{name && name}</p>
      <p>age:{age}</p>
      <p>email:{email}</p>
      <p>Phone:{number}</p>
      {task && <p>{task.id}</p>}
    </div>
  );
};

export default Show;
