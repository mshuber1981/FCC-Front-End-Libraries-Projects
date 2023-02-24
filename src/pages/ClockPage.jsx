import React from "react";
// Components
import { Container } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";
import Clock from "../features/clock/Clock";

export default function ClockPage() {
  const pageTitle = "Clock";

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
              <span role="img" aria-label="Clock emoji">
                🕒
              </span>
            </h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Clock />
      </section>
    </>
  );
}
