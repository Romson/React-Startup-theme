import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

export const Navbarmenu = () => (
  <Navbar className="navbarmenu" expand="lg">
    <Navbar.Brand href="#home">
      <img
        className="logo"
        src="https://tppwebsolutions.com/wp-content/uploads/logo-design.png"
        alt="Company log"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#pricing">PRICING</Nav.Link>
        <Nav.Link href="#contact">CONTACT US</Nav.Link>
      </Nav>
      <Button className="buttonLogin" variant="outline-info">
        <i className="fas fa-user" /> Login
      </Button>
      <Button variant="outline-info">Register</Button>
    </Navbar.Collapse>
  </Navbar>
);
