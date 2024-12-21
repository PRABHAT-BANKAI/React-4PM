import { useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { create } from "./redux/feature/crudSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todolist.todolist);
  console.log(todoData);

  function handleSubmit() {
    dispatch(create(text));
  }
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>add button</button>
      <div>
        {todoData.map((todo,index) =>{
          return (
            <div key={index}>
              {todo}
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
