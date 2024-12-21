import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./feature/crudSlice";

export default configureStore({
  reducer: {
    todolist: todoReducer,
  },
});
