import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect } from "react";
import axiosClient from "../../utils/axios";

const GuestRoutes = () => {
  // useEffect(() => {
  //   axiosClient
  //     .get("/sanctum/csrf-cookie", {
  //       baseURL: "http://127.0.0.1:8000",
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const { checkAuthenticated, getUserRole } = useAuthContext();
  const staffRoleIds = [1, 2, 3];
  const studentRoleId = 4;
  const userRoleId = getUserRole();
  const authenticated = checkAuthenticated();

  if (!checkAuthenticated()) {
    console.log(checkAuthenticated());
    console.log("user role: " + getUserRole());
    return <Outlet />;
  }
  if (checkAuthenticated()) {
    console.log("authenticated");
    if (getUserRole() === studentRoleId) {
      console.log("student");
      return <Navigate to="/student/dashboard" />;
    } else if (staffRoleIds.includes(getUserRole())) {
      console.log("staff");
      return <Navigate to="/staff/dashboard" />;
    }
  }
};

export default GuestRoutes;
