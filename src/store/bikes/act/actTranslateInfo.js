import { createAsyncThunk } from "@reduxjs/toolkit"

export const translateInfo= createAsyncThunk('bikes/translate',async(info,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    try{
        const response= await fetch('https://muddy-silky-relative.glitch.me/translate',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({msg:info,to:"ar"})
        });
        const data= await response.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})