import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark">
      <div className="container">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-link">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/student" className="nav-link">
                Student
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/staff" className="nav-link">
                Staff
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/document-verification" className="nav-link">
                Document Verification
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/student-profile" className="nav-link">
                Student Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
