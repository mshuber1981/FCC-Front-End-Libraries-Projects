import React from "react";
import { useAppContext } from "../appContext";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// Icons
import { GiSunflower, GiMoon } from "react-icons/gi";
import FCC from "../media/free-code-camp.svg";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";

// Animations
const spinner = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

// Loading Spinner
export const Loading = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 5px solid;
  border-radius: 50%;
  border-top-color: var(--primary);
  margin: 1rem auto;
  animation: ${spinner} 0.6s linear infinite;
`;

// Spacer for fixed Navigation bar
export const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;

const navLinks = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Random Quotes",
    route: "/Random-Quotes",
  },
  {
    id: 3,
    name: "Markdown Previewer",
    route: "/Markdown-Previewer",
  },
  {
    id: 4,
    name: "Drum Machine",
    route: "/Drum-Machine",
  },
  {
    id: 5,
    name: "Calculator",
    route: "/Calculator",
  },
  {
    id: 6,
    name: "Clock",
    route: "/Clock",
  },
];

export function NavBar() {
  const { isExpanded, toggleExpanded, closeExpanded } = useAppContext();
  const { pathname } = useLocation();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="xl"
        expanded={isExpanded}
        bg="success"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt="Free Code Camp Logo"
              src={FCC}
              width="35"
              height="35"
              className="d-inline-block align-top rounded-circle nav-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              {navLinks.map((el) => {
                return (
                  <Nav.Item key={el.id}>
                    <Link
                      to={el.route}
                      className={
                        pathname === el.route ? "nav-link active" : "nav-link"
                      }
                      onClick={closeExpanded}
                    >
                      {el.name}
                    </Link>
                  </Nav.Item>
                );
              })}
            </Nav>
            <Nav>
              <ThemeToggle />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

// Theme Toggle
const StyledSwitch = styled.label`
  /* Slider pill */
  display: flex;
  width: 3.2rem;
  font-size: 1.5rem;
  border-radius: 30px;
  transition: var(--transition);
  border: 2px solid white;

  /* Hide defualt checkbox */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    opacity: 0;
  }

  /* Move span when checked */
  input[type="checkbox"]:checked + div {
    transform: translateX(100%);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
    color: #fff;
  }
`;

export function ThemeToggle() {
  const { theme, toggleTheme, closeExpanded } = useAppContext();

  return (
    <StyledSwitch onClick={closeExpanded}>
      <input
        type="checkbox"
        aria-label={`Toggle theme, currently ${theme}.`}
        onClick={toggleTheme}
      />
      <div>{theme === "light" ? <GiSunflower /> : <GiMoon />}</div>
    </StyledSwitch>
  );
}

// Titles
export const Title = styled.div`
  display: inline-block;
  margin: 0 auto;
  text-align: center;

  .underline {
    height: 0.25rem;
    width: 75%;
    min-width: 3rem;
    border-radius: 0.25rem;
    background: var(--clr-primary-5);
    margin: 0 auto 1.5rem auto;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(to left, var(--primary-light), var(--primary-dark))"
        : "linear-gradient(to right, var(--primary-dark), var(--primary-light))"};
  }
`;
