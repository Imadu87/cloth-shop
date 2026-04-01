import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.product.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }

      // Update totals
      state.totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.product.id !== id);

      // Update totals
      state.totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.product.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }

      // Update totals
      state.totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      );
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;