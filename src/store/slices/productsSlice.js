import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../../components/db/products";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: allProducts,
  },
  reducers: {}
});

export default productsSlice.reducer;