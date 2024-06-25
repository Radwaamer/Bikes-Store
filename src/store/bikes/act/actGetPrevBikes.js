import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBikes } from "./actGetBikes";

export const getPrevBikes=createAsyncThunk("bike/getPrevBikes",async (_,thunkAPI)=>{
    const {getState,dispatch}=thunkAPI;
    if(getState().bikes.prevBikes.length===0){
        dispatch(fetchBikes());
        }
        else{
        return getState().bikes.prevBikes;
    }

})