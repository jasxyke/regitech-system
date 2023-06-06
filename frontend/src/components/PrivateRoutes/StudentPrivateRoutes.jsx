import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import StudentNavbar from "../navbars/StudentNavbar";
import { UserProvider } from "../../context/UserContext";

const StudentPrivateRoutes = () => {
  const { checkAuthenticated, getUserRole } = useAuthContext();
  const allowedRoleId = 4;
  const userRoleId = getUserRole();
  const authenticated = checkAuthenticated();
  return checkAuthenticated() && getUserRole() === allowedRoleId ? (
    <UserProvider>
      <StudentNavbar />
      <div className="container">
        <Outlet />
      </div>
    </UserProvider>
  ) : (
    <Navigate to="/" />
  );
};

export default StudentPrivateRoutes;
