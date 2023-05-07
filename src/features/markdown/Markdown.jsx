import React from "react";
// https://react-redux.js.org/api/hooks#using-hooks-in-a-react-redux-app
import { useSelector, useDispatch } from "react-redux";
import { handleMarkdownChange, markdownSelector } from "./markdownSlice";
import styled from "styled-components";
// https://github.com/markedjs/marked
import { marked } from "marked";
// https://github.com/markedjs/marked-mangle
import { mangle } from "marked-mangle";
// https://github.com/markedjs/marked-gfm-heading-id
import { gfmHeadingId } from "marked-gfm-heading-id";
// Components
import { Button, Row, Col } from "react-bootstrap";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  textarea {
    min-height: 10rem;
  }

  button {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const Markdown = () => {
  const [isCoppied, setCoppied] = React.useState(false);
  const dispatch = useDispatch();
  const { markdown } = useSelector(markdownSelector);

  const options = {
    prefix: "FCC-",
    breaks: true,
  };

  marked.use(mangle());
  marked.use(gfmHeadingId(options));

  return (
    <Row>
      <Col lg={6}>
        <StyledDiv>
          <textarea
            id="editor"
            className="h-100 w-100 px-2"
            onChange={(event) => dispatch(handleMarkdownChange(event))}
            type="text"
            value={markdown}
          />
          {isCoppied ? (
            <Button
              variant="success"
              onClick={function () {
                // Copy markdown to clipboard
                navigator.clipboard.writeText(markdown);
              }}
            >
              Copied
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={function () {
                // Copy markdown to clipboard
                navigator.clipboard.writeText(markdown);
                setCoppied(true);
                setTimeout(() => {
                  setCoppied(false);
                }, "5000");
              }}
            >
              Copy Markdown
            </Button>
          )}
        </StyledDiv>
      </Col>
      <Col lg={6}>
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
