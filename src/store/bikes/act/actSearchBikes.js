import { createAsyncThunk } from "@reduxjs/toolkit"
import { getPrevBikes } from "./actGetPrevBikes";

export const searchBikes=createAsyncThunk('bike/searchBikes',async(search,thunkAPI)=>{
    const {dispatch}= thunkAPI;
    await dispatch(getPrevBikes());
    return search;
})