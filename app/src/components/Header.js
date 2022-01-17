import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Ra</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/">.is()</Link>
          <Link to="/about">.About()</Link>
          <Link to="/projects">.Projects()</Link>
          <Link to="/contact">.Contact()</Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
