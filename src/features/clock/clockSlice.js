// https://redux-toolkit.js.org/api/createSlice#createslice
import { createSlice } from "@reduxjs/toolkit";

export const clockSlice = createSlice({
  name: "clock",
  initialState: {
    brkLength: 5,
    seshLength: 25,
    timerState: "stopped",
    timerType: "Session",
    timer: 1500,
    intervalID: "",
    alarmColor: { color: "white" },
  },
  reducers: {
    setBrkLength: (state, { payload }) => {
      if (state.timerState === "running") {
        return;
      }
      if (state.timerType === "Session") {
        if (payload === "-" && state.brkLength !== 1) {
          state.brkLength = state.brkLength - 1;
        } else if (payload === "+" && state.brkLength !== 60) {
          state.brkLength = state.brkLength + 1;
        }
      } else if (payload === "-" && state.brkLength !== 1) {
        state.brkLength = state.brkLength - 1;
        state.timer = state.brkLength * 60;
      } else if (payload === "+" && state.brkLength !== 60) {
        state.brkLength = state.brkLength + 1;
        state.timer = state.brkLength * 60;
      }
    },
    setSeshLength: (state, { payload }) => {
      if (state.timerState === "running") {
        return;
      }
      if (state.timerType === "Break") {
        if (payload === "-" && state.seshLength !== 1) {
          state.seshLength = state.seshLength - 1;
        } else if (payload === "+" && state.seshLength !== 60) {
          state.seshLength = state.seshLength + 1;
        }
      } else if (payload === "-" && state.seshLength !== 1) {
        state.seshLength = state.seshLength - 1;
        state.timer = state.seshLength * 60;
      } else if (payload === "+" && state.seshLength !== 60) {
        state.seshLength = state.seshLength + 1;
        state.timer = state.seshLength * 60;
      }
    },
    start: (state) => {
      state.timerState = "running";
    },
    stop: (state) => {
      state.timerState = "stopped";
    },
    setIntervalID: (state, { payload }) => {
      state.intervalID = payload;
    },
    decrementTimer: (state) => {
      if (state.timerState === "running" && state.timerType === "Session") {
        if (state.timer === 0) {
          state.timerType = "Break";
          state.timer = state.brkLength * 60;
          // state.timer = state.timer - 1;
        } else {
          state.timer = state.timer - 1;
        }
      } else if (
        state.timerState === "running" &&
        state.timerType === "Break"
      ) {
        if (state.timer === 0) {
          state.timerType = "Session";
          state.timer = state.seshLength * 60;
          // state.timer = state.timer - 1;
        } else {
          state.timer = state.timer - 1;
        }
      } else {
        clearInterval(state.intervalID);
      }
    },
    reset: (state) => {
      state.brkLength = 5;
      state.seshLength = 25;
      state.timerState = "stopped";
      state.timerType = "Session";
      state.timer = 1500;
      state.alarmColor = { color: "white" };
      if (state.intervalID) {
        clearInterval(state.intervalID);
        state.intervalID = "";
      }
    },
  },
});

export const {
  setBrkLength,
  setSeshLength,
  start,
  stop,
  setIntervalID,
  decrementTimer,
  reset,
} = clockSlice.actions;

export const clockSelector = (state) => state.clock;

export default clockSlice.reducer;
