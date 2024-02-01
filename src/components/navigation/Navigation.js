import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img
          src="../../../assets/images/liberty-logo.png"
          width="100px"
          height="100px"
          className="d-inline-block align-top"
          alt="Liberty Pole Logo"
        />
        <span className="logo-text ml-2">Liberty Pole Dance Academy</span>
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            Home
          </Nav.Link>

          <NavDropdown title="Classes" id="basic-nav-dropdown">
            <NavDropdown.Item href="#timetable">
              Timetable
            </NavDropdown.Item>
            <NavDropdown.Item href="#prices">
              Prices
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item href="#instructors">
              Instructors
            </NavDropdown.Item>
            <NavDropdown.Item href="#studio">
              Studio
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#faq">
            Store
          </Nav.Link>
          <Nav.Link href="#faq">
            FAQ
          </Nav.Link>
          <Nav.Link href="#faq">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;