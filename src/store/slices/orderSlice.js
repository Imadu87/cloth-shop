import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },

    clearOrders: (state) => {
      state.orders = [];
      localStorage.removeItem("orders");
    },

    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload;
      const order = state.orders.find((o) => o.id === id);
      if (order) {
        order.status = status;
        localStorage.setItem("orders", JSON.stringify(state.orders));
      }
    },
  },
});

export const { addOrder, clearOrders, updateOrderStatus } =
  orderSlice.actions;

export default orderSlice.reducer;