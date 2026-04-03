import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 1) {
        state.count -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    resetCount: (state) => {
      state.count = 1; // 👈 reset
    },
  },
});

export const { increment, decrement, incrementByAmount, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
