import React, { useState } from "react";

const Controlled = () => {
  const [text, setText] = useState("");
  

  return (
    <div>
      <h1>Controlled</h1>
      <input
        value={text}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(text);
        }}
      >
        add
      </button>
    </div>
  );
};

export default Controlled;
