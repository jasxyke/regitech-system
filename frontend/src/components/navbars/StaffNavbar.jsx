import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import css from "./Navbar.module.css";
import logo from "../../assets/puplogo.png";

function StaffNavbar() {
  const [click, setClick] = useState(false);
  const { logout } = useAuthContext();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={css.navbar}>
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-left"
            />{" "}
            <span style={{ color: "#f5f3f3" }}>Reg</span>
            <span style={{ color: "#fff200" }}>iTech</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/staff/dashboard">
                Staff
              </Nav.Link>
              <Nav.Link as={Link} to="/staff/admin">
                Admin
              </Nav.Link>
              <Nav.Link as={Link} to="/staff/document-verification">
                Document Verification
              </Nav.Link>
            </Nav>
            <Button onClick={logout} className={css.btn_logout}>
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default StaffNavbar;
