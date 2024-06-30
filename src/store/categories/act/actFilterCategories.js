import { createAsyncThunk } from "@reduxjs/toolkit"
import { getPrevBikes } from "store/bikes/act/actGetPrevBikes";
import { filterByCategory } from "store/bikes/bikeSlice";
import { deselectCategory, selectCategory } from 'store/categories/categorySlice';

export const filterCategories=createAsyncThunk('category/filterCategory',async({category,select},thunkAPI)=>{
    const {dispatch, getState}=thunkAPI;
    select? dispatch(selectCategory(category)): dispatch(deselectCategory(category));
    await dispatch(getPrevBikes());

    const selectedCategories=getState().categories.selectedCategories;
    const bikesState=getState().bikes.bikes;

    if(selectedCategories.length!==0){
        const filterdBikes=[];
        for(let i=0;i<selectedCategories.length;i++){
            for(let x=0;x<bikesState.length;x++){
                if(bikesState[x].category.toLowerCase()===selectedCategories[i].toLowerCase()){
                    filterdBikes.push(bikesState[x]);
                }
            }
        }
    dispatch(filterByCategory(filterdBikes));
    }
})