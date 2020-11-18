import React, { useState, useEffect, useRef } from "react";
// https://react-bootstrap.github.io/components/jumbotron/
import { Button, Jumbotron } from "react-bootstrap";
// https://react-icons.netlify.com/#/
import { FcPlus, FcMinus } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import {
  clockSelector,
  setBrkLength,
  setSeshLength,
  start,
  stop,
  setIntervalID,
  decrementTimer,
  reset,
} from "./clockSlice";

const Clock = () => {
  const [volumeLvl, setVolume] = useState(0.5);
  const { brkLength, seshLength, timerType, timer, timerState } = useSelector(
    clockSelector
  );
  const dispatch = useDispatch();
  const clock = () => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // setCurrentTimer(minutes + ":" + seconds);
    return minutes + ":" + seconds;
  };
  const timerControl = () => {
    if (timerState === "stopped") {
      dispatch(start());
      dispatch(
        setIntervalID(
          setInterval(() => {
            dispatch(decrementTimer());
          }, 1000)
        )
      );
    } else {
      dispatch(stop());
    }
  };
  // https://reactjs.org/docs/refs-and-the-dom.html
  let audioBeep = useRef(null);
  let inputValue = useRef("50");
  const resetAll = () => {
    dispatch(reset());
    audioBeep.pause();
    audioBeep.currentTime = 0;
  };
  useEffect(() => {
    let currentTimer = timer;
    if (currentTimer === 0) {
      audioBeep.play();
    }
  }, [timer]);
  useEffect(() => {
    audioBeep.volume = volumeLvl;
  }, [volumeLvl]);

  return (
    <Jumbotron className="clock text-center">
      <div className="d-flex justify-content-around mb-5">
        <h3 id="break-label" className="">
          Break Length
          <div className="d-flex flex-column text-center">
            <div id="break-length" className="d-inline">
              <button
                id="break-increment"
                className="m-2"
                value="+"
                onClick={(event) =>
                  dispatch(setBrkLength(event.currentTarget.value))
                }
              >
                <FcPlus />
              </button>
              {brkLength}
              <button
                id="break-decrement"
                className="m-2"
                value="-"
                onClick={(event) =>
                  dispatch(setBrkLength(event.currentTarget.value))
                }
              >
                <FcMinus />
              </button>
            </div>
          </div>
        </h3>

        <h3 id="session-label" className="">
          Session Length
          <div className="d-flex flex-column text-center">
            <div id="session-length" className="d-inline">
              <button
                id="session-increment"
                className="m-2"
                value="+"
                onClick={(event) =>
                  dispatch(setSeshLength(event.currentTarget.value))
                }
              >
                <FcPlus />
              </button>
              {seshLength}
              <button
                id="session-decrement"
                className="m-2"
                value="-"
                onClick={(event) =>
                  dispatch(setSeshLength(event.currentTarget.value))
                }
              >
                <FcMinus />
              </button>
            </div>
          </div>
        </h3>
      </div>

      <h3 id="timer-label">{timerType}</h3>
      <h3 id="time-left">{clock()}</h3>
      <Button
        id="start_stop"
        className="m-2"
        variant="secondary"
        size="sm"
        onClick={() => timerControl()}
      >
        Start/Stop
      </Button>
      <Button
        id="reset"
        className="m-2"
        variant="secondary"
        size="sm"
        onClick={() => resetAll()}
      >
        Reset
      </Button>
      {/* Some of the tests produce this audio error https://developers.google.com/web/updates/2017/06/play-request-was-interrupted */}
      <audio
        preload="auto"
        ref={(audio) => {
          audioBeep = audio;
        }}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
      <br />
      <h5>Alarm Volume</h5>
      <input
        type="range"
        min="0"
        max="100"
        ref={(valueAsNumber) => {
          inputValue = valueAsNumber;
        }}
        onChange={() => {
          setVolume(inputValue.value / 100);
          console.log(volumeLvl);
          console.log(audioBeep.volume);
        }}
      />
    </Jumbotron>
  );
};

export default Clock;
