import React, { useEffect, useState } from "react";

const Todolist = () => {
  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasksData")) || []
  );
  const [editMode, setEditMode] = useState(false);
  const [taskIndex, setTaskIndex] = useState("");
  function handleAdd() {
    if (textInput == "") {
      alert("Task cannot be empty");
      return;
    }
    setTasks([textInput, ...tasks]);
    setTextInput("");
  }

  function handleEdit(index) {
    console.log(index), tasks[taskIndex];
    if (tasks[index]) {
      setTextInput(tasks[index]);
    }

    setTaskIndex(index);
    setEditMode(true);
  }
  function handleSave() {
    let updatedData = tasks.map((task, i) => {
      return taskIndex == i ? textInput : task;
    });
    setTasks(updatedData);
    setEditMode(false);
    setTextInput("");
  }

  function handleDelete(id) {
    let filterData = tasks.filter((task, index) => {
      return id !== index;
    });
    setTasks(filterData);
  }

  useEffect(() => {
    localStorage.setItem("tasksData", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <input
        type="text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      {editMode ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
      <ul>
        {tasks &&
          tasks.map((task, index) => {
            return (
              <li key={index}>
                <p>{task}</p>
                <button
                  onClick={() => {
                    handleEdit(index);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Todolist;
