import React from "react";

const Uncont = () => {
  let inputRef = useRef(null);

  function handleShow() {
    console.log(inputRef.current.value);
  }
  return (
    <div>
      <h1>Uncontrolled </h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleShow}>show</button>
      <p>{inputRef.current.value}</p>
    </div>
  );
};

export default Uncont;
