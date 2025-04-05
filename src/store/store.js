import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../Slice/producetsSlice";
import { searchSlice } from "../Slice/searchSlice";
import { cartSlice } from "../Slice/cartSlice";

export const store =configureStore({
    reducer:{
        [productsApi.reducerPath] : productsApi.reducer,
        [searchSlice.reducerPath] : searchSlice.reducer,
        [cartSlice.reducerPath] : cartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware), 
});