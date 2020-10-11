import React from "react";
// https://www.npmjs.com/package/marked
import marked from "marked";
// https://react-bootstrap.github.io/layout/grid/#responsive-grids
import {Row, Col} from "react-bootstrap"
// https://react-redux.js.org/api/hooks#using-hooks-in-a-react-redux-app
import { useSelector, useDispatch } from "react-redux";
import { handleMarkdownChange, markdownSelector } from "./markdownSlice";

const Markdown = () => {
  marked.setOptions({
    breaks: true,
  });

  const dispatch = useDispatch();
  const { markdown } = useSelector(markdownSelector);

  return (
    <Row>
      <Col className="mt-5 bg-light" lg={6} >
      <textarea
        id="editor"
        className="h-100 w-100 my-5 pt-5"
        onChange={(event) => dispatch(handleMarkdownChange(event))}
        type="text"
        value={markdown}
      />
      </Col>
      <Col className="mt-5 bg-light" lg={6} >
      <div
        id="preview"
        className="my-5 pt-5"
        dangerouslySetInnerHTML={{
          __html: marked(markdown),
        }}
      />
      </Col>
    </Row>
  );
};

export default Markdown;
