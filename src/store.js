import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import booksReducer from "./components/Books/booksSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
