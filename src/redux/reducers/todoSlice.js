import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [{id:1,task:"Đi học"}],
  reducers: {
    createTodo: (state, action) => {
      // createTodo =(data)=>({type, payload:data})
      let idNew = state.length === 0 ? 1 : state[state.length - 1].id + 1;
      state.push({ id: idNew, task: action.payload });
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
    },
    updateTodo: (state, action) => {
        state[action.payload.index].task = action.payload.task;
    },
  },
});
