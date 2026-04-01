import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    counter: counterReducer,
    cart: cartReducer,  
  },
});