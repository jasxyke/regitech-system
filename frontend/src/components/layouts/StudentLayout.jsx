import { Outlet } from "react-router-dom";
import StudentNavbar from "../navbars/StudentNavbar";

const StudentLayout = () => {
  return (
    <>
      <StudentNavbar />
      <Outlet />
    </>
  );
};

export default StudentLayout;
