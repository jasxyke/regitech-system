import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthContext } from "../../context/AuthContext";
import React, { useState } from "react";
import css from "./Navbar.module.css";
import logo from "../../assets/puplogo.png";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

function StaffNavbar({ userRoleId }) {
  const [click, setClick] = useState(false);
  const { logout } = useAuthContext();
  return (
    <>
      <style type="text/css">
        {`
      .bg-maroon{
        background-color: #790000;
      }
    `}
      </style>
      <Navbar expand="lg" bg="maroon" variant="dark">
        <Container>
          <Navbar.Brand href="/staff/verification-requests">
            <img
              src={logo}
              width="45"
              height="45"
              className="d-inline-block align-left"
            />{" "}
            <span style={{ color: "#f5f3f3" }}>Reg</span>
            <span style={{ color: "#fff200" }}>iTech</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-collapse" />
          <Navbar.Collapse id="navbar-collapse">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to={"/staff/verification-requests"}
                className={css.navlinks}
              >
                Verification requests
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/staff/student-records"}
                className={css.navlinks}
              >
                Student Records
              </Nav.Link>
              {userRoleId == 1 && (
                <Nav.Link
                  as={Link}
                  to={"/staff/head-registrar"}
                  className={css.navlinks}
                >
                  Head Registrar
                </Nav.Link>
              )}
            </Nav>
            <LogoutButton onLogout={logout} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default StaffNavbar;
