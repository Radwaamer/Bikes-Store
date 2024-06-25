import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCategories=createAsyncThunk('category/fetchCategories',async (_,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const response=await fetch('http://localhost:3030/categories');
        const data=await response.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})