import React from "react";
import "./Header.scss";
import { Navbar, Form, FormControl, Nav, Button } from "react-bootstrap";
import {
  FaCog,
  FaBell,
  FaUserCircle,
  FaEnvelope,
  FaThLarge,
} from "react-icons/fa";

const Header = () => {
  return (
    <Navbar expand="lg" className="Header justify-content-between">
      <Navbar.Brand href="#" className="header-logo mx-4">
        <FaThLarge style={{ color: '#5151ff' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="d-flex align-items-center">
          <FormControl type="text" placeholder="Search" className="search mr-sm-2" />
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#settings">
            <FaEnvelope className="icon-color" />
          </Nav.Link>
          <Nav.Link href="#settings">
            <FaCog className="icon-color" />
          </Nav.Link>
          <Nav.Link href="#notifications">
            <FaBell className="icon-color" />
          </Nav.Link>
          <Nav.Link href="#profile">
            <FaUserCircle className="icon-color" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

