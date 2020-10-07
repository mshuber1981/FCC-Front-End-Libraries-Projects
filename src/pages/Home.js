import React from "react";
// https://react-bootstrap.github.io/components/jumbotron/
import { Button } from "react-bootstrap";
// https://react-icons.netlify.com/#/
import { FaFreeCodeCamp } from "react-icons/fa";

const Home = () => {
  return (
    <section className="container">
      <div className="d-flex flex-column vh-100 align-items-center justify-content-center text-center bg-light">
        <h1 className="display-4">Welcome!</h1>
        <p className="my-5">
          Thanks for checking out my spin on the{" "}
          <a href="https://www.freecodecamp.org/">freecodecamp.org</a> Front End
          Libraries Projects.
        </p>
        <a href="https://www.freecodecamp.org/mshuber1981">
          <Button size="lg">
            <FaFreeCodeCamp className="mr-2" /> FCC Profile
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Home;
