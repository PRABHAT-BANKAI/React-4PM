import { createSlice } from "@reduxjs/toolkit";

export const todolistSlice = createSlice({
  name: "todolist",
  initialState: {
    todolist: JSON.parse(localStorage.getItem("todolistData")) || [],
  },
  reducers: {
    create: (state, action) => {
      state.todolist.push(action.payload);
      localStorage.setItem("todolistData", JSON.stringify(state.todolist));
    },
  },
});

// Action creators are generated for each case reducer function
export const { create } = todolistSlice.actions;

export default todolistSlice.reducer;
