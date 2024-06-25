import { configureStore } from "@reduxjs/toolkit"
import bikes from "./bikes/bikeSlice";
import cart from "./cart/cartSlice";
import categories from "./categories/categorySlice";

export const store= configureStore({reducer:{bikes,cart,categories}});