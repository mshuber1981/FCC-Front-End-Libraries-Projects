import React from "react";
import { useAppContext } from "../../appContext";
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuotes, quotesSelector } from "./quotesSlice";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Spinner } from "react-bootstrap";

const StyledDiv = styled.div`
  .tweet-icon {
    line-height: 0;
    font-size: 2.25rem;
    transition: var(--transition);
    color: ${({ theme }) => theme.color};

    &:hover {
      color: rgb(var(--bs-success-rgb));
    }
  }
`;

const Quotes = () => {
  const { theme } = useAppContext();
  const dispatch = useDispatch();
  const { quote, author, loading, hasErrors } = useSelector(quotesSelector);

  if (loading) return <Spinner animation="border" variant="success" />;
  if (hasErrors) return <p>Something went wrong fetching the Quotes...</p>;

  return (
    <StyledDiv id="quote-box" className="my-5">
      <blockquote className="blockquote">
        <p id="text">{quote}</p>
        <figcaption id="author" className="blockquote-footer mt-2">
          {author}
        </figcaption>
      </blockquote>
      <Button
        id="new-quote"
        className="my-3"
        variant={theme === "light" ? "outline-dark" : "outline-light"}
        onClick={() => dispatch(getRandomQuotes())}
      >
        Random Quote
      </Button>
      <div className="my-4" />
      <a
        id="tweet-quote"
        aria-label="Share this quote as a tweet."
        title="Share this quote as a tweet."
        href={`https://twitter.com/intent/tweet?text=%22${quote}%22%20-%20${author}`}
      >
        <Icon icon="fa:twitter-square" className="tweet-icon" />
      </a>
    </StyledDiv>
  );
};

export default Quotes;
