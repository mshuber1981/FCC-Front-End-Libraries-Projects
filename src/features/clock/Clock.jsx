import React, { useState, useEffect, useRef } from "react";
import { useAppContext } from "../../appContext";
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
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button } from "react-bootstrap";

const StyledDiv = styled.div`
  max-width: 95vw;

  .plus-minus {
    width: 15rem;

    .icon-button {
      line-height: 0;
    }
  }
`;

const Clock = () => {
  const [volumeLvl, setVolume] = useState(0.5);
  const { theme } = useAppContext();
  const { brkLength, seshLength, timerType, timer, timerState } =
    useSelector(clockSelector);
  const dispatch = useDispatch();

  const clock = () => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // setCurrentTimer(minutes + ":" + seconds);
    return minutes + ":" + seconds;
  };

  let audioBeep = useRef(null);
  let inputValue = useRef("50");

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
    <StyledDiv className="text-center">
      <div className="d-flex mb-3">
        <h3 id="break-label" className="plus-minus">
          Break
          <br />
          Length
          <div className="d-flex flex-column text-center">
            <div id="break-length" className="d-inline">
              <button
                id="break-increment"
                className="m-2 icon-button"
                value="+"
                onClick={(event) =>
                  dispatch(setBrkLength(event.currentTarget.value))
                }
              >
                <Icon icon="ic:baseline-plus" />
              </button>
              {brkLength}
              <button
                id="break-decrement"
                className="m-2 icon-button"
                value="-"
                onClick={(event) =>
                  dispatch(setBrkLength(event.currentTarget.value))
                }
              >
                <Icon icon="ic:baseline-minus" />
              </button>
            </div>
          </div>
        </h3>
        <h3 id="session-label" className="plus-minus">
          Session
          <br />
          Length
          <div className="d-flex flex-column text-center">
            <div id="session-length" className="d-inline">
              <button
                id="session-increment"
                className="m-2 icon-button"
                value="+"
                onClick={(event) =>
                  dispatch(setSeshLength(event.currentTarget.value))
                }
              >
                <Icon icon="ic:baseline-plus" />
              </button>
              {seshLength}
              <button
                id="session-decrement"
                className="m-2 icon-button"
                value="-"
                onClick={(event) =>
                  dispatch(setSeshLength(event.currentTarget.value))
                }
              >
                <Icon icon="ic:baseline-minus" />
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
        variant={theme === "light" ? "outline-dark" : "outline-light"}
        size="sm"
        onClick={() => timerControl()}
      >
        Start/Stop
      </Button>
      <Button
        id="reset"
        className="m-2"
        variant={theme === "light" ? "outline-dark" : "outline-light"}
        size="sm"
        onClick={() => resetAll()}
      >
        Reset
      </Button>
      {/* Some of the tests produce this audio error https://developers.google.com/web/updates/2017/06/play-request-was-interrupted */}
      <audio
        id="beep"
        preload="auto"
        ref={(audio) => {
          audioBeep = audio;
        }}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
      <h5 className="mt-3">Alarm Volume</h5>
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
    </StyledDiv>
  );
};

export default Clock;
