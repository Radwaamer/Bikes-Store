import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./act/actGetCategories";
import { filterCategories } from "./act/actFilterCategories";

const categorySlice=createSlice({
    name:"category",
    initialState:{categories:[],selectedCategories:[],loading:false,error:null},
    reducers:{
        selectCategory:(state,action)=>{
            state.selectedCategories.push(action.payload);
        },
        deselectCategory:(state,action)=>{
            state.selectedCategories=state.selectedCategories.filter(category=>category!==action.payload);
        }
    },
    extraReducers:(builder)=>{

        // fetch categories
        builder.addCase(fetchCategories.pending,(state)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(fetchCategories.fulfilled,(state,action)=>{
            state.loading=false;
            state.categories=action.payload;
        });
        builder.addCase(fetchCategories.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

        // filter category
        builder.addCase(filterCategories.pending,(state)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(filterCategories.fulfilled,(state)=>{
            state.loading=false;
        });
        builder.addCase(filterCategories.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

    }
});

export const {selectCategory} = categorySlice.actions; 
export const {deselectCategory} = categorySlice.actions; 

export default categorySlice.reducer;