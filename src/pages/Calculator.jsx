import React from "react";
// Components
import { Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";
import Calc from "../features/calculator/Calc";

export default function Calculator() {
  const pageTitle = "Calculator";

  React.useEffect(() => {
    const updateTitle = () => (document.title = pageTitle);
    updateTitle();
  }, []);

  return (
    <>
      <section className="section">
        <Container className="d-flex">
          <Title>
            <h2>
              {pageTitle}{" "}
              <span role="img" aria-label="Calculator emoji">
                📱
              </span>
            </h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Calc />
      </section>
    </>
  );
}
