import { Outlet } from "react-router-dom";
import StaffNavbar from "../navbars/StaffNavbar";
import { UserProvider } from "../../context/UserContext";

const StafflLayout = () => {
  return (
    <UserProvider>
      <StaffNavbar />
      <Outlet />
    </UserProvider>
  );
};

export default StafflLayout;
