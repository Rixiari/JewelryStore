import { configureStore } from "@reduxjs/toolkit";
//api
import { apiSlice } from "./api";
import cartSlice from "./cartSlice";

export default configureStore({
  reducer: {
    cartSlice:cartSlice, 
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
