import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";
import filterReducer from "./slices/filterSlice";
import sortReducer from "./slices/sortSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    counter: counterReducer,
    cart: cartReducer, 
    filters: filterReducer,
    sort: sortReducer,
  },
});