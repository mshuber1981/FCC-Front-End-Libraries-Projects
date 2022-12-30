import React from "react";
// Components
import { Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

export default function DrumMachine() {
  const pageTitle = "Drum Machine";

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
      </section>
    </>
  );
}
