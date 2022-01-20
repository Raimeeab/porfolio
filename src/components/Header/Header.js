import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Header.css"

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid className="headerContainer">
        <Navbar.Brand>
          <Link to="/"  className="name">raimee</Link>
          <span className="surname">Abbassi</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  className="navBar" id="responsive-navbar-nav">
        <Nav className="headerNav">
          <Link to="/" className="link">.is()</Link>
          <Link to="/about" className="link">.About()</Link>
          <Link to="/projects" className="link">.Projects()</Link>
          <Link to="/contact" className="link">.Contact()</Link>
          <Link to="/resume" className="link">.Resume()</Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
