import React from "react";
// Components
import SEO from "../components/SEO";
import { Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

export default function DrumMachine() {
  const pageTitle = "Drum Machine";

  return (
    <>
      <SEO title={pageTitle} />
      <section className="section">
        <Container className="d-flex">
          <Title>
            <h2>{pageTitle}</h2>
            <div className="underline"></div>
          </Title>
        </Container>
      </section>
    </>
  );
}
