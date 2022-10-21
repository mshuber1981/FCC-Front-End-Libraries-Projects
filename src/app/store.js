// https://redux-toolkit.js.org/api/configureStore#configurestore
import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "../features/quotes/quotesSlice";
import markdownReducer from "../features/markdown/markdownSlice";
import drumReducer from "../features/drum/drumSlice";
import calcReducer from "../features/calculator/calcSlice";
import clockReducer from "../features/clock/clockSlice";

export default configureStore({
  // https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["markdown/handleMarkdownChange"],
      },
    }),
  reducer: {
    quotes: quotesReducer,
    markdown: markdownReducer,
    drum: drumReducer,
    calc: calcReducer,
    clock: clockReducer,
  },
});
