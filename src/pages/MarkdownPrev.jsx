import React from "react";
// Components
import { Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";
import Markdown from "../features/markdown/Markdown";

export default function MarkdownPrev() {
  const pageTitle = "Markdown Previewer";

  React.useEffect(() => {
    const updateTitle = () => (document.title = pageTitle);
    updateTitle();
  }, []);

  return (
    <>
      <section className="section">
        <Container className="d-flex">
          <Title>
            <h2>{pageTitle}</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container>
          <Markdown />
        </Container>
      </section>
    </>
  );
}
