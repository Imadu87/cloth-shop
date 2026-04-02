import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  availability: null, // "instock" | "outofstock"
  minPrice: "",
  maxPrice: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setAvailability: (state, action) => {
      state.availability = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    // reset all filters
    resetFilters: (state) => {
      state.availability = null;
      state.minPrice = "";
      state.maxPrice = "";
    },
    // reset only price filters
    resetPrice: (state) => {
      state.minPrice = "";
      state.maxPrice = "";
    },
  },
});

export const {
  setAvailability,
  setMinPrice,
  setMaxPrice,
  resetFilters,
  resetPrice,
} = filterSlice.actions;

export default filterSlice.reducer;