// https://redux-toolkit.js.org/api/createSlice#createslice
import { createSlice } from "@reduxjs/toolkit";

const isOperator = /[*/+-]/;
const isOperatorNoNeg = /[*/+]/;
const endsWithOperator = /[*/+-]$/;
const endsWithNegativeSign = /[*/+]-$/;

export const calcSlice = createSlice({
  name: "calc",
  initialState: {
    currentVal: "0",
    prevVal: "0",
    formula: "",
    evaluated: false,
  },
  reducers: {
    clearDisplay: (state) => {
      state.currentVal = "0";
      state.prevVal = "0";
      state.formula = "";
      state.evaluated = false;
    },
    handleNumbers: (state, { payload }) => {
      state.evaluated = false;
      state.currentVal =
        state.currentVal === "0" || isOperator.test(state.currentVal)
          ? payload
          : state.currentVal + payload;
      state.formula =
        state.currentVal === "0" && payload === "0"
          ? state.formula === ""
            ? payload
            : state.formula
          : /([^.0-9]0|^0)$/.test(state.formula)
          ? state.formula.slice(0, -1) + payload
          : state.formula + payload;
    },
    handleOperators: (state, { payload }) => {
      state.currentVal =
        state.formula === "" && isOperatorNoNeg.test(payload) ? "0" : payload;
      if (state.formula === "" && isOperatorNoNeg.test(payload)) {
        state.formula = "";
      } else if (state.evaluated) {
        state.formula = state.prevVal + payload;
      } else if (!endsWithOperator.test(state.formula)) {
        state.prevVal = state.formula;
        state.formula = state.formula + payload;
      } else if (!endsWithNegativeSign.test(state.formula)) {
        state.formula =
          (endsWithNegativeSign.test(state.formula + payload)
            ? state.formula
            : state.prevVal) + payload;
      } else if (payload !== "-") {
        state.formula = state.prevVal + payload;
      }
    },
    handleDecimal: (state, { payload }) => {
      if (state.evaluated) {
        state.currentVal = "0.";
        state.formula = "0.";
        state.evaluated = false;
      } else if (!state.currentVal.includes(".")) {
        state.evaluated = false;
        if (
          endsWithOperator.test(state.formula) ||
          (state.currentVal === "0" && state.formula === "")
        ) {
          state.currentVal = "0.";
          state.formula = state.formula + "0.";
        } else {
          state.currentVal = state.formula.match(/(-?\d+\.?\d*)$/)[0] + ".";
          state.formula = state.formula + ".";
        }
      }
    },
    handleEvaluate: (state) => {
      if (state.formula === "" || state.formula === "-") {
        return;
      }
      let expression = state.formula;
      while (endsWithOperator.test(expression)) {
        expression = expression.slice(0, -1);
      }
      let answer =
        // Come up with a better way to handle evaluation
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
        // eslint-disable-next-line
        Math.round(1000000000000 * eval(state.formula)) / 1000000000000;
      state.currentVal = answer;
      state.formula = expression + "=" + answer;
      state.prevVal = answer;
      state.evaluated = true;
    },
  },
});
export const {
  clearDisplay,
  handleNumbers,
  handleOperators,
  handleDecimal,
  handleEvaluate,
} = calcSlice.actions;

export const calcSelector = (state) => state.calc;

export default calcSlice.reducer;
