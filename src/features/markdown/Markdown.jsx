import React from "react";
// https://react-redux.js.org/api/hooks#using-hooks-in-a-react-redux-app
import { useSelector, useDispatch } from "react-redux";
import { handleMarkdownChange, markdownSelector } from "./markdownSlice";
import styled from "styled-components";
// https://www.npmjs.com/package/marked
import { marked } from "marked";
// Components
import { Row, Col } from "react-bootstrap";

const StyledTextArea = styled.textarea`
  resize: none;
  min-height: 10rem;
`;

const Markdown = () => {
  marked.setOptions({
    breaks: true,
  });

  const dispatch = useDispatch();
  const { markdown } = useSelector(markdownSelector);

  return (
    <Row className="">
      <Col className="" lg={6}>
        <StyledTextArea
          id="editor"
          className="h-100 w-100"
          onChange={(event) => dispatch(handleMarkdownChange(event))}
          type="text"
          value={markdown}
        />
      </Col>
      <Col className="" lg={6}>
        <div
          id="preview"
          className="py-5"
          dangerouslySetInnerHTML={{
            __html: marked(markdown),
          }}
        />
      </Col>
    </Row>
  );
};

export default Markdown;
