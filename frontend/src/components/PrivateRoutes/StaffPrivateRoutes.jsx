import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import StaffNavbar from "../navbars/StaffNavbar";
import { UserProvider } from "../../context/UserContext";
import { Link } from "react-router-dom";

const StaffPrivateRoutes = () => {
  const { checkAuthenticated, getUserRole } = useAuthContext();
  const allowedRoleIds = [1, 2, 3];
  const userRoleId = getUserRole();
  const authenticated = checkAuthenticated();
  console.log(checkAuthenticated());
  console.log("user role: " + getUserRole());
  return checkAuthenticated() && allowedRoleIds.includes(getUserRole()) ? (
    <UserProvider>
      <StaffNavbar />
      <div className="container">
        <Outlet />
      </div>

      <div>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Quick Links</h2>
              <Link to="/">Polytechnic University of the Philippines</Link>
              <Link to="/">
                Polytechnic University of the Philippines Student Information
                System | PUPSIS
              </Link>
              <Link to="/">
                Polytechnic University of the Philippines Appointment System
              </Link>
            </div>
          </div>
        </div>
      </div>
    </UserProvider>
  ) : (
    <Navigate to="/" />
  );
};

export default StaffPrivateRoutes;
