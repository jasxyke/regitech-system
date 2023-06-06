import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import StaffNavbar from "../navbars/StaffNavbar";
import { UserProvider } from "../../context/UserContext";
import { Link } from "react-router-dom";
import MainFooter from "../footers/MainFooter";

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
      <div className="container pt-3">
        <Outlet />
      </div>
    </UserProvider>
  ) : (
    <Navigate to="/" />
  );
};

export default StaffPrivateRoutes;
