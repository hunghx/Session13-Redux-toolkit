import { createSlice } from "@reduxjs/toolkit";


export const postSlice= createSlice({
    name:"post",
    initialState:[],
    reducers:{
            getList:(state,action)=>{
                state = action.payload;
                return state;
            }
        }
})