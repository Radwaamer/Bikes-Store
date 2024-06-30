import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCategories=createAsyncThunk('category/fetchCategories',async (_,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const response=await fetch(process.env.REACT_APP_JSON_SERVER_PATH+'categories');
        const data=await response.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})