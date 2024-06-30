import { createAsyncThunk } from "@reduxjs/toolkit"

export const getBike = createAsyncThunk('bike/getBike', async(id, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const response= await fetch(`${process.env.REACT_APP_JSON_SERVER_PATH}bikes/${id}`);
        const data= await response.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});