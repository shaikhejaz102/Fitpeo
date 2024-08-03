import React from "react";
import "./Navbar.scss";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";
import {
  FaHome,
  FaChartBar,
  FaPen,
  FaWallet,
  FaShoppingBag,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbars = () => {
  return (
    <Nav defaultActiveKey="#home" className="flex-column sidebar">
      <div className="d-flex flex-column justify-content-between main_side">
      <div>
        <Nav.Link href="#home">
          <FaHome className="icon-color"/>
        </Nav.Link>
        <Nav.Link href="#analytics">
          <FaChartBar className="icon-color"/>
        </Nav.Link>
        <Nav.Link href="#write">
          <FaPen className="icon-color"/>
        </Nav.Link>
        <Nav.Link href="#wallet">
          <FaWallet className="icon-color"/>
        </Nav.Link>
        <Nav.Link href="#bag">
          <FaShoppingBag className="icon-color"/>
        </Nav.Link>
      </div>
      <div>
        <Nav.Link href="#logout">
          <FaSignOutAlt className="icon-color"/>
        </Nav.Link>
      </div>
      </div>
    </Nav>
  );
};

export default Navbars;
