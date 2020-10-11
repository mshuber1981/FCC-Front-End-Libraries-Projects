import React, { useEffect, useCallback } from "react";
// https://react-bootstrap.github.io/components/jumbotron/
import { Button, Jumbotron, Row, Col } from "react-bootstrap";
// https://react-redux.js.org/api/hooks#using-hooks-in-a-react-redux-app
import { useSelector, useDispatch } from "react-redux";
import {
  buttons,
  drumSelector,
  playAudio,
  handleKeyPress,
  clearDisplay,
} from "./drumSlice";

const Drum = () => {
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
      <Jumbotron id="drum-machine" className="text-center">
        <h1 className="mb-4">
          Drum Me{" "}
          <span role="img" aria-label="Speaker emoji">
            🔊
          </span>
        </h1>
        <h2 id="display">{display}</h2>
        {buttons.map((row, index) => (
          <Row className="justify-content-around" key={index}>
            {row.map((col) => (
              <Col className="m-2" key={col.id} xs={3}>
                <Button
                  id={col.id}
                  className="drum-pad"
                  size="lg"
                  variant="dark"
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
      </Jumbotron>
    </>
  );
};

export default Drum;
