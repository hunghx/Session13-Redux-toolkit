import { createSlice } from "@reduxjs/toolkit";

export const editSlice= createSlice({
    name: "edit",
    initialState: {id :"",task:""},
     reducers: {
        editTask:(state, action)=>{
            state = action.payload;
            return state;
        }
     }
})