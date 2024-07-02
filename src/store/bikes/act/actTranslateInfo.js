import { createAsyncThunk } from "@reduxjs/toolkit"

export const translateInfo= createAsyncThunk('bikes/translate',async(info,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI;
    console.log(JSON.stringify({msg:info,to:"ar",expect:[]}))
    try{
        const response= await fetch('https://muddy-silky-relative.glitch.me/translate',{
            method:'POST',
            headers:{
                "Content-Type" : "Application/Json"
            },
            body:JSON.stringify({msg:info,to:"ar",expect:[]})
        });
        const data= await response.json();
        return data.translation;
    }catch(error){
        return rejectWithValue(error.message);
    }
})