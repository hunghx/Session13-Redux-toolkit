import { combineReducers, createStore } from "@reduxjs/toolkit";
import { todoSlice } from "./reducers/todoSlice";
import { editSlice } from "./reducers/editSlice";

export const store = createStore(combineReducers({todos:todoSlice.reducer,editTask:editSlice.reducer}))