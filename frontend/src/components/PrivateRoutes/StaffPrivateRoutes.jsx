import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import StaffNavbar from "../navbars/StaffNavbar";
import MainFooter from "../footers/MainFooter";
import { UserProvider } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const StaffPrivateRoutes = () => {
  const { checkAuthenticated, getUserRole } = useAuthContext();
  var allowedRoleIds = [1, 2, 3];
  const userRoleId = getUserRole();
  var authenticated;

  useEffect(() => {
    authenticated = checkAuthenticated();
    console.log(checkAuthenticated());
    console.log("user role: " + getUserRole());
  }, []);

  return checkAuthenticated() &&
    allowedRoleIds.includes(userRoleId) &&
    userRoleId !== null ? (
    <UserProvider>
      <StaffNavbar userRoleId={userRoleId} />
      <div className="container pt-3">
        <Outlet />
      </div>
      <MainFooter />
    </UserProvider>
  ) : (
    <Navigate to="/" />
  );
};

export default StaffPrivateRoutes;
