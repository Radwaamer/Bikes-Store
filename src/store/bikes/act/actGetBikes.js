import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchBikes=createAsyncThunk('bike/fetchBikes',async (_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const response=await fetch('http://localhost:3030/bikes');
        const bikes=await response.json();
        return bikes;
    }catch(error){
        return rejectWithValue(error.message);
    }
});