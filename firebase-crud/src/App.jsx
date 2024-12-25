import { useEffect, useState } from "react";

import "./App.css";
import { db } from "../config/firbase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,

} from "firebase/firestore";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState("");
  const [show, setShow] = useState(false);

  const data = collection(db, "users");
  async function handleCreate() {
    if (text.trim() === "") {
      return alert("Please enter text first");
    }
    await addDoc(data, { text: text });
    setText("");
    const getTodos = await getDocs(data); // getdocs not getdoc
    getTodos.docs.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
    setTodos(getTodos.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  }
  async function handleDelete(id) {
    const deleteValue = doc(db, "users", id);
    await deleteDoc(deleteValue);
    setTodos((prev) => prev.filter((doc) => doc.id != id));
  }

  useEffect(() => {
    async function print() {

      const getTodos = await getDocs(data); // getdocs not getdoc
      getTodos.docs.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
      setTodos(getTodos.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }
    print();
  }, []);

  async function handleUpdate() {
    console.log(text)
    const update = doc(db, "users", editId);
  
    await updateDoc(update, { text: text });


    const getTodos = await getDocs(data); // getdocs not getdoc

    getTodos.docs.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
    setTodos(getTodos.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    setText("")
    setShow(false);
  }

  async function handleEdit(todo) {
    const editValue = doc(db, "users", todo.id);
    console.log(editValue);

    setText(todo.text);
    setEditId(todo.id);
    setShow(true);
  }
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {show ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleCreate}>Create</button>
      )}

      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <p>{todo.text}</p>
              <button
                onClick={() => {
                  handleEdit(todo);
                }}
              >
                edit
              </button>
              <button
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
