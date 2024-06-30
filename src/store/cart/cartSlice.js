import { createSlice } from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{cart:[],loading:false,error:null},
    reducers:{
        cartHandeler:(state,action)=>{
            if(action.payload.compare){
                state.cart=state.cart.filter(item=>item.id!=action.payload.info.id);
            }else{
                state.cart.push(action.payload.info);
            }
        },

    }
});

export const {cartHandeler}=cartSlice.actions;

export default cartSlice.reducer;