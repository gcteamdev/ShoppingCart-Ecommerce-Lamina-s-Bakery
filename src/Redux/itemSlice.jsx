import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import itemList from '../data/itemList.json';

export const fetchAllItems = createAsyncThunk(
  'fetch-all-items',
  async (apiUrl) => {
    const response = await fetch(apiUrl);
    return response.json();
  }
);

const itemSlice = createSlice({
  name: 'items',
  initialState: { data: [], fetchStatus: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllItems.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchStatus = 'success';
      })
      .addCase(fetchAllItems.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(fetchAllItems.rejected, (state) => {
        state.data = itemList.items;
        state.fetchStatus = 'error';
      });
  },
});

export default itemSlice.reducer
