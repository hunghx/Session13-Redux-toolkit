import { combineReducers, createStore,configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./reducers/todoSlice";
import { editSlice } from "./reducers/editSlice";

// export const store = createStore(combineReducers({todos:todoSlice.reducer,editTask:editSlice.reducer}))
export const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
        editTask: editSlice.reducer
    }
})