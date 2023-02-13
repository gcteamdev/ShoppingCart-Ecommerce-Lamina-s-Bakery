import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItemIds: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItemIds = [action.payload, ...state.cartItemIds]
    },
    removeFromCart: (state, action) => {
      const indexOfId = state.cartItemIds.indexOf(action.payload)
      state.cartItemIds.splice(indexOfId, 1)
    },
    clearAllItems: (state) => {
      state.cartItemIds = []
    },
  },
})
export const { addToCart,removeFromCart , clearAllItems } = cartSlice.actions;
export default cartSlice.reducer;
