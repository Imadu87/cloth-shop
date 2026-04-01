import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../../components/db/products";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: allProducts,
  },
  reducers: {},
});

// Selector: Sale Quantity ki base par top 4 products
export const selectBestSellers = (state) => {
  return [...state.products.products]
    .sort((a, b) => b.saleQuantity - a.saleQuantity)
    .slice(0, 4);
};

export default productsSlice.reducer;
