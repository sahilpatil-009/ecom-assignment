import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState:{
        searchData:[],
    },

    reducers:{
        searchData: (state,action) =>{
            state.searchData = action.payload;
        }
    }
});

export const { searchData } = searchSlice.actions;
