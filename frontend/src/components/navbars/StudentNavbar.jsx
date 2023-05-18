import { Link } from "react-router-dom";

const StudentNavbar = () => {
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
      </div>
    </nav>
  );
};

export default StudentNavbar;
