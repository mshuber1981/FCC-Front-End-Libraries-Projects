import React from "react";
// https://react-bootstrap.github.io/components/jumbotron/
import { Button, Jumbotron } from "react-bootstrap";
// https://react-redux.js.org/api/hooks#using-hooks-in-a-react-redux-app
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuotes, quotesSelector } from "./quotesSlice";
// https://react-icons.netlify.com/#/
import { FaTwitterSquare } from "react-icons/fa";

const Quotes = () => {
  const dispatch = useDispatch();
  const { quote, author, loading, hasErrors } = useSelector(quotesSelector);

  if (loading) return <h2>Loading Quotes...</h2>;
  if (hasErrors) return <h2>Something went wrong...</h2>;

  return (
    <section className="container">
      <Jumbotron id="quote-box">
        <blockquote>
          <p id="text" className="h5">
            {quote}
          </p>
          <footer id="author" className="my-4">
            — {author}
          </footer>
        </blockquote>

        <Button
          id="new-quote"
          variant="primary"
          onClick={() => dispatch(getRandomQuotes())}
        >
          Random Quote
        </Button>
        <a
          id="tweet-quote"
          className="d-block mt-4 h1"
          href={`https://twitter.com/intent/tweet?text="${quote}"%20-${author}`}
        >
          <FaTwitterSquare />
        </a>
      </Jumbotron>
    </section>
  );
};

export default Quotes;
