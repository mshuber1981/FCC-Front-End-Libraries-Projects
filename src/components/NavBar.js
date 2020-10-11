import React from "react";
// https://www.npmjs.com/package/react-router-bootstrap
import { LinkContainer } from "react-router-bootstrap";
// https://react-bootstrap.github.io/components/navbar/
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand="xl"
        fixed="top"
      >
        <Navbar.Toggle className="ml-5" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-5">
            <LinkContainer exact to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/Quote-Machine">
              <Nav.Link>Quote Machine</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/Markdown-Previewer">
              <Nav.Link>Markdown Previewer</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/Drum-Machine">
              <Nav.Link>Drum Machine</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavBar;
