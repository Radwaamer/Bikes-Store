import { createSlice } from "@reduxjs/toolkit"

const paginationSlice=createSlice({
    name:"pagination",
    initialState:{pagination:[],current:1,productsPerPage:6,loading:false,error:null},
    reducers:{

        // change current page
        changeCurrent:(state,action) => {
            state.current=action.payload;
        },

        // get pagination list
        paginationList:(state,action) => {
            state.pagination=[];
            for(let i=1;i<=Math.ceil(action.payload.length/state.productsPerPage);i++){
                state.pagination.push(i)
            }
        },

    }
});


export const { changeCurrent } = paginationSlice.actions;
export const { paginationList } = paginationSlice.actions;

export default paginationSlice.reducer;