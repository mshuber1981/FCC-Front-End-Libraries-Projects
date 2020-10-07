import React from "react";
import Quotes from "../features/quotes/Quotes";

const QuoteMAchine = () => {
  return (
    <section className="container">
      <div className="d-flex flex-column vh-100 align-items-center justify-content-center text-center bg-light">
        <Quotes />
      </div>
    </section>
  );
};

export default QuoteMAchine;
