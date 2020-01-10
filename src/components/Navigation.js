import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

// export a navigation component (use react-router-dom)
export default () => (
  <Navbar
    bg="dark"
    variant="dark"
    expand="lg"
    className="justify-content-between"
  >
    <Navbar.Brand>React-Test</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/modeler" className="nav-link">
          Modeler
        </Link>
        <Link to="/frameworks" className="nav-link">
          Frameworks
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
