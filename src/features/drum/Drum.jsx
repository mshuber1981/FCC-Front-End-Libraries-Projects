import React, { useEffect, useCallback } from "react";
import { useAppContext } from "../../appContext";
import { useSelector, useDispatch } from "react-redux";
import {
  buttons,
  drumSelector,
  playAudio,
  handleKeyPress,
  clearDisplay,
} from "./drumSlice";
import styled from "styled-components";
// Components
import { Button, Col, Row } from "react-bootstrap";

const StyledDiv = styled.div`
  .drum-pad {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

const Drum = () => {
  const { theme } = useAppContext();
  const { display } = useSelector(drumSelector);
  const dispatch = useDispatch();

  const keyPress = useCallback(
    (event) => {
      const { key, keyCode } = event;
      dispatch(handleKeyPress({ key, keyCode }));
    },
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyPress);

    return () => {
      window.removeEventListener("keydown", keyPress);
    };
  }, [keyPress]);

  useEffect(() => {
    const timer = setTimeout(() => dispatch(clearDisplay()), 2000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <StyledDiv id="drum-machine" className="text-center">
        <h2 id="display">{display}</h2>
        {buttons.map((row, index) => (
          <Row className="justify-content-evenly" key={index}>
            {row.map((col) => (
              <Col className="my-2" key={col.id} xs={3}>
                <Button
                  id={col.id}
                  className="drum-pad"
                  size="lg"
                  variant={theme === "light" ? "outline-dark" : "outline-light"}
                  onClick={() => dispatch(playAudio(col))}
                >
                  <audio
                    id={col.keyTrigger}
                    className={`clip ${col.id}`}
                    src={col.url}
                  />
                  {col.keyTrigger}
                </Button>
              </Col>
            ))}
          </Row>
        ))}
      </StyledDiv>
    </>
  );
};

export default Drum;
