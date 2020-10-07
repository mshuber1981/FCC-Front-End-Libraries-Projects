// https://redux-toolkit.js.org/api/createSlice#createslice
import { createSlice } from "@reduxjs/toolkit";

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    loading: false,
    hasErrors: false,
    quote: "",
    author: "",
    quoteData: {},
    randomQuoteData: {},
  },
  reducers: {
    getQuotes: (state) => {
      state.loading = true;
    },
    getQuotesSuccess: (state, { payload }) => {
      state.quoteData = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getQuotesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    getRandomQuotes: (state) => {
      state.randomQuoteData =
        state.quoteData.quotes[
          Math.floor(Math.random() * state.quoteData.quotes.length)
        ];
      state.quote = state.randomQuoteData.quote;
      state.author = state.randomQuoteData.author;
    },
  },
});

export const {
  getQuotes,
  getQuotesSuccess,
  getQuotesFailure,
  getRandomQuotes,
} = quotesSlice.actions;

export const quotesSelector = (state) => state.quotes;

export default quotesSlice.reducer;

export const fetchQuotes = () => {
  return async (dispatch) => {
    dispatch(getQuotes());

    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      ).then((result) => result.json());

      dispatch(getQuotesSuccess(response));
      dispatch(getRandomQuotes());
    } catch (error) {
      dispatch(getQuotesFailure());
    }
  };
};
