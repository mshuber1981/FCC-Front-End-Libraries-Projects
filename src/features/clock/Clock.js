import React, { useEffect, useRef } from "react";
// https://react-bootstrap.github.io/components/jumbotron/
import { Jumbotron } from "react-bootstrap";
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

  return (
    <Jumbotron className="clock text-center">
      <div className="d-flex justify-content-around mb-5">
        <h3 id="break-label" className="">
          Break Length
          <div className="d-flex flex-column text-center">
            <div id="break-length" className="d-inline">
              <button
                id="break-increment"
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
      <button id="start_stop" onClick={() => timerControl()}>
        Start/Stop
      </button>
      <button id="reset" onClick={() => resetAll()}>
        Reset
      </button>
      <audio
        id="beep"
        preload="auto"
        ref={(audio) => {
          audioBeep = audio;
        }}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </Jumbotron>
  );
};

export default Clock;
