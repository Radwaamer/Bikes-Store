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
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },

        setCart:(state,action)=>{
            state.cart=action.payload;
            localStorage.setItem("cart",JSON.stringify(state.cart));
        }

    }
});

export const {cartHandeler}=cartSlice.actions;
export const {setCart}=cartSlice.actions;

export default cartSlice.reducer;