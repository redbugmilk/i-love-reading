import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  values: [],
  count: 0,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    storedBooks(state, action) {
      state.values = action.payload.books ? action.payload.books : [];
      state.count = action.payload.count ? action.payload.count : 0;
    },
  },
});

export const { storedBooks } = booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
