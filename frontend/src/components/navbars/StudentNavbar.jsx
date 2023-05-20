import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const StudentNavbar = () => {
  const { logout } = useAuthContext();
  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark">
      <div className="container">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/student/dashboard" className="nav-link">
                Student
              </Link>
            </li>
          </ul>
        </div>
        <Button variant="primary" onClick={logout}>
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default StudentNavbar;
