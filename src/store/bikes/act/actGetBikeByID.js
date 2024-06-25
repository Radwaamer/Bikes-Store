import { createAsyncThunk } from "@reduxjs/toolkit"

export const getBike = createAsyncThunk('bike/getBike', async(id, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const response= await fetch(`http://localhost:3030/bikes/${id}`);
        const data= await response.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});