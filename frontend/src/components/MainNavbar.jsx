import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <nav className="navbar nav">
      <div className="container">
        <div>
          <ul style={{ listStyle: "none", display: "flex", columnGap: "20px" }}>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign up</Link>
            </li>
            <li>
              <Link to="/student">Student</Link>
            </li>
            <li>
              <Link to="/staff">Staff</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/document-verification">Document Verification</Link>
            </li>
            <li>
              <Link to="/student-profile">Student Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
