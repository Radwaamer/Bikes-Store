import { createSlice } from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{cart:[],loading:false,error:null},
    reducers:{
        cartHandeler(state,action){
            state.cart.push(action.payload);
        }
    }
});

export const {cartHandeler}=cartSlice.actions;

export default cartSlice.reducer;