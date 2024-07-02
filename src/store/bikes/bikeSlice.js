import { createSlice } from "@reduxjs/toolkit"

import { fetchBikes } from "./act/actGetBikes";
import { getBike } from "./act/actGetBikeByID";
import { getPrevBikes } from "./act/actGetPrevBikes";
import { searchBikes } from "./act/actSearchBikes";
import { translateInfo } from "./act/actTranslateInfo";

const bikeSlice=createSlice({
    name:"bike",
    initialState:{prevBikes:[],bikes:[],selectedBike:{},loading:false,error:null},


    reducers:{

        // filter by category
        filterByCategory:(state,action)=>{
            state.bikes=action.payload;
        },

        // sort Bikes by price
        sortByPrice:(state,action)=>{
            state.bikes= action.payload=="asc"? 
            state.bikes.slice().sort((a,b)=>Number((a.price.start).slice(1))-Number((b.price.start).slice(1))) : 
            state.bikes.slice().sort((a,b)=>Number((b.price.start).slice(1))-Number((a.price.start).slice(1)));
        }

    },


    extraReducers:(builder)=>{

        // fetch bikes
        builder.addCase(fetchBikes.pending,(state)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(fetchBikes.fulfilled,(state,action)=>{
            state.loading=false;
            state.bikes=action.payload;
            state.prevBikes=state.bikes;
        });
        builder.addCase(fetchBikes.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

        // get prev bikes data
        builder.addCase(getPrevBikes.pending,(state,action)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(getPrevBikes.fulfilled,(state,action)=>{
            state.loading=false;
            if(action.payload){
                state.bikes=action.payload
            }
        });
        builder.addCase(getPrevBikes.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

        // get bike by id
        builder.addCase(getBike.pending,(state)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(getBike.fulfilled,(state,action)=>{
            state.loading=false;
            state.selectedBike=action.payload;
        });
        builder.addCase(getBike.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

        // search bikes
        builder.addCase(searchBikes.pending,(state)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(searchBikes.fulfilled,(state,action)=>{
            state.loading=false;
            state.bikes=state.bikes.filter(bike=>bike.name.toLowerCase().includes(action.payload.toLowerCase()));
        });
        builder.addCase(searchBikes.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

        // translate bike info
        builder.addCase(translateInfo.pending,(state)=>{
            state.loading=true;
            state.error=null;
        });
        builder.addCase(translateInfo.fulfilled,(state,action)=>{
            state.loading=false;
            state.selectedBike=action.payload;
            console.log("hi")
        });
        builder.addCase(translateInfo.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            console.log("bye")
        });

    }
});


export const {filterByCategory}=bikeSlice.actions;
export const {sortByPrice}=bikeSlice.actions;

export default bikeSlice.reducer;