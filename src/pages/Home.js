import React from "react";
// https://react-bootstrap.github.io/components/jumbotron/
import { Button, Jumbotron } from "react-bootstrap";
// https://react-icons.netlify.com/#/
import { FaFreeCodeCamp } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home">
      <Jumbotron className="px-4 text-center">
        <h1 className="display-4">Welcome!</h1>
        <p className="lead">
          Thanks for checking out my spin on the{" "}
          <a href="https://www.freecodecamp.org/">freecodecamp.org</a> Front End
          Libraries Projects.
        </p>
        <a href="https://www.freecodecamp.org/mshuber1981">
          <Button variant="dark" size="lg">
            <FaFreeCodeCamp className="mr-2" /> FCC Profile
          </Button>
        </a>
      </Jumbotron>
    </section>
  );
};

export default Home;
