// https://redux-toolkit.js.org/api/configureStore#configurestore
import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "../features/quotes/quotesSlice";

export default configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});
