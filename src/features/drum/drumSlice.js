// https://redux-toolkit.js.org/api/createSlice#createslice
import { createSlice } from "@reduxjs/toolkit";

export const buttons = [
  [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
  ],
  [
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
  ],
  [
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ],
];

export const drumSlice = createSlice({
  name: "drum",
  initialState: {
    display: "",
    audio: "",
  },
  reducers: {
    playAudio: (state, { payload }) => {
      state.audio = payload.keyTrigger;
      state.display = payload.id;
      const sound = document.getElementById(state.audio);
      sound.play();
    },
    handleKeyPress: (state, { payload }) => {
      const conditions = [81, 87, 69, 65, 83, 68, 90, 88, 67];
      if (conditions.includes(payload.keyCode)) {
        state.audio = payload.key.toUpperCase();
        state.display = document
          .getElementById(state.audio)
          .className.replace(/clip/g, "");
        const sound = document.getElementById(state.audio);
        sound.play();
      } else {
        state.display = "No Match";
      }
    },
    // https://immerjs.github.io/immer/docs/return#inline-shortcuts-using-void
    clearDisplay: (state) => void (state.display = ""),
  },
});

export const { playAudio, handleKeyPress, clearDisplay } = drumSlice.actions;

export const drumSelector = (state) => state.drum;

export default drumSlice.reducer;
