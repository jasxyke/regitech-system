import { Button, Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useState } from 'react';
import { useAuthContext } from "../../context/AuthContext";
import logo from "../../assets/puplogo.png";
import studentcss from './Navbar.module.css';

function StudentNavbar() {
  const [click, setClick] = useState(false);
  const {logout} = useAuthContext();

  return (
    <>
      <Navbar className={studentcss.navbar}>
        <Container>
          <Navbar.Brand href="#">
            <img
              src ={logo}
              width="50"
              height="50"
              className="d-inline-block align-left"
            />{' '}
            <span style={{ color: "#f5f3f3" }}>Reg</span><span style={{ color: "#fff200" }}>iTech</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/staff/dashboard">Student</Nav.Link>
          </Nav>
              <Button className={studentcss.btn} onClick={logout} >
                Logout
              </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default StudentNavbar;
