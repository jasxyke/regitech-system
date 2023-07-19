import { Link } from "react-router-dom";
import css from "./Navbar.module.css";
import logo from "../../assets/puplogo.png";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthContext } from "../../context/AuthContext";
import React, { useState } from "react";
import LogoutButton from "./LogoutButton";

const PlainNavbar = () => {
  return (
    <>
      <style type="text/css">
        {`
          .bg-maroon {
            background-color: #790000;
          }
        `}
      </style>
      <Navbar expand="lg" bg="maroon" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="45"
              height="45"
              className="d-inline-block align-left"
            />{" "}
            <span style={{ color: "#f5f3f3" }}>Reg</span>
            <span style={{ color: "#fff200" }}>iTech</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default PlainNavbar;
