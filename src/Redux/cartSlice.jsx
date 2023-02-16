import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: {},
    cartItemIds: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      if (state.cartItems[itemId]) {
        state.cartItems[itemId].quantity += 1;
      } else {
        state.cartItems[itemId] = { id: itemId, quantity: 1 };
        state.cartItemIds.push(itemId);
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      if (state.cartItems[itemId]) {
        state.cartItems[itemId].quantity -= 1;
        if (state.cartItems[itemId].quantity === 0) {
          delete state.cartItems[itemId];
          state.cartItemIds.splice(state.cartItemIds.indexOf(itemId), 1);
        }
      }
    },
    clearAllItems: (state) => {
      state.cartItems = {};
      state.cartItemIds = [];
    },
  },
})

export const { addToCart, removeFromCart, clearAllItems } = cartSlice.actions;
export default cartSlice.reducer;
