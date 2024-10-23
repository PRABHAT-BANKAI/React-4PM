import React from "react";

const List = () => {
  let array = [
    { id: 1, name: "batman" },
    { id: 2, name: "superman" },
    { id: 3, name: "aquaman" },
  ];
  return (
    <div>
      <h1>list</h1>
      <ul>
        {array.map((element, index) => {
          return <li key={element.id}>{element.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
