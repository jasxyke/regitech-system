import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const StaffNavbar = () => {
  const { logout } = useAuthContext();

  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark">
      <div className="container">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/staff/dashboard" className="nav-link">
                Staff
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/staff/admin" className="nav-link">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/staff/document-verification" className="nav-link">
                Document Verification
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

export default StaffNavbar;
