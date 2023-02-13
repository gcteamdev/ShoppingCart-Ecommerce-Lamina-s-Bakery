import { configureStore } from '@reduxjs/toolkit';
import itemSlice from "./itemSlice";
import cartSlice from "./cartSlice"

const store = configureStore({
    reducer: {
      items: itemSlice,
      cart: cartSlice
    },
  })
  
  export default store