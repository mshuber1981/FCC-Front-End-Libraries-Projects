// https://redux-toolkit.js.org/api/createSlice#createslice
import { createSlice } from "@reduxjs/toolkit";

export const clockSlice = createSlice({
  name: "clock",
  initialState: {},
  reducers: {},
});

export const {} = clockSlice.actions;

export const clockSelector = (state) => state.clock;

export default clockSlice.reducer;
