import { configureStore } from '@reduxjs/toolkit';
import itemSlice from "./itemSlice";

const store = configureStore({
    reducer: {
      items: itemSlice.reducer,
    },
  })
  
  export default store