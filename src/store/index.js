import { configureStore } from "@reduxjs/toolkit"
import bikes from "./bikes/bikeSlice";
import cart from "./cart/cartSlice";
import categories from "./categories/categorySlice";
import pagination from "./pagination/paginationSlice";

export const store= configureStore({reducer:{bikes,cart,categories,pagination}});