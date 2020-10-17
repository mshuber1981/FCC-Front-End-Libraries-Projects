import React, { useEffect } from "react";
// https://react-bootstrap.github.io/components/jumbotron/
import { Button, Jumbotron, Row, Col } from "react-bootstrap";
// https://react-icons.netlify.com/#/
import { FaDivide, FaTimes, FaMinus, FaPlus } from "react-icons/fa";
// https://react-redux.js.org/api/hooks#using-hooks-in-a-react-redux-app
import { useSelector, useDispatch } from "react-redux";
import {
  calcSelector,
  clearDisplay,
  handleNumbers,
  handleOperators,
  handleDecimal,
  handleEvaluate,
} from "./calcSlice";

const Calc = () => {
  const { currentVal, formula } = useSelector(calcSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearDisplay());
  }, [dispatch]);

  return (
    <>
      <Jumbotron>
        <h1 className="mb-4 text-center">
          Calculator{" "}
          <span role="img" aria-label="Calculator emoji">
            📱
          </span>
        </h1>
        <Row className="bg-dark border border-primary">
          <Col
            id="display"
            className="m-0 py-3 border border-primary h2 text-right text-white"
            xs={12}
          >
            {currentVal}
          </Col>
          <Col
            className="m-0 py-3 border border-primary h2 text-right text-white"
            xs={12}
          >
            {formula}
          </Col>
          <Col className="py-2" xs={9}>
            <Button
              id="clear"
              className="w-100 bg-secondary"
              size="lg"
              onClick={() => dispatch(clearDisplay())}
            >
              AC
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="divide"
              className="w-100 px-0 bg-warning"
              value="/"
              size="lg"
              onClick={(event) =>
                dispatch(handleOperators(event.currentTarget.value))
              }
            >
              <FaDivide />
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="seven"
              className="w-100 px-0 bg-dark"
              value="7"
              size="lg"
              onClick={(event) =>
                dispatch(handleNumbers(event.currentTarget.value))
              }
            >
              7
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="eight"
              className="w-100 px-0 bg-dark"
              value="8"
              size="lg"
              onClick={(event) =>
                dispatch(handleNumbers(event.currentTarget.value))
              }
            >
              8
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="nine"
              className="w-100 px-0 bg-dark"
              value="9"
              size="lg"
              onClick={(event) =>
                dispatch(handleNumbers(event.currentTarget.value))
              }
            >
              9
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="multiply"
              className="w-100 px-0 bg-warning"
              value="*"
              size="lg"
              onClick={(event) =>
                dispatch(handleOperators(event.currentTarget.value))
              }
            >
              <FaTimes />
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="four"
              className="w-100 px-0 bg-dark"
              value="4"
              size="lg"
              onClick={(event) =>
                dispatch(handleNumbers(event.currentTarget.value))
              }
            >
              4
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="five"
              className="w-100 px-0 bg-dark"
              value="5"
              size="lg"
              onClick={(event) =>
                dispatch(handleNumbers(event.currentTarget.value))
              }
            >
              5
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="six"
              className="w-100 px-0 bg-dark"
              value="6"
              size="lg"
              onClick={(event) =>
                dispatch(handleNumbers(event.currentTarget.value))
              }
            >
              6
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="subtract"
              className="w-100 px-0 bg-warning"
              value="-"
              size="lg"
              onClick={(event) =>
                dispatch(handleOperators(event.currentTarget.value))
              }
            >
              <FaMinus />
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="one"
              className="w-100 px-0 bg-dark"
              value="1"
              size="lg"
              onClick={(event) =>
                dispatch(handleNumbers(event.currentTarget.value))
              }
            >
              1
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="two"
              className="w-100 px-0 bg-dark"
              value="2"
              size="lg"
              onClick={(event) =>
                dispatch(handleNumbers(event.currentTarget.value))
              }
            >
              2
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="three"
              className="w-100 px-0 bg-dark"
              value="3"
              size="lg"
              onClick={(event) =>
                dispatch(handleNumbers(event.currentTarget.value))
              }
            >
              3
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="add"
              className="w-100 px-0 bg-warning"
              value="+"
              size="lg"
              onClick={(event) =>
                dispatch(handleOperators(event.currentTarget.value))
              }
            >
              <FaPlus />
            </Button>
          </Col>
          <Col className="py-2" xs={6}>
            <Button
              id="zero"
              className="w-100 px-0 bg-dark"
              value="0"
              size="lg"
              onClick={(event) =>
                dispatch(handleNumbers(event.currentTarget.value))
              }
            >
              0
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="decimal"
              className="w-100 px-0 bg-dark"
              value="."
              size="lg"
              onClick={() => dispatch(handleDecimal())}
            >
              .
            </Button>
          </Col>
          <Col className="py-2" xs={3}>
            <Button
              id="equals"
              className="w-100 px-0 bg-warning"
              value="="
              size="lg"
              onClick={() => dispatch(handleEvaluate())}
            >
              =
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    </>
  );
};

export default Calc;
