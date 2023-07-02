import GreetingsHeader from "../../../components/GreetingsHeader";
import { useUser } from "../../../context/UserContext";
import StudentCSS from "./StudentDashboard.module.css";
import StudentDashboardTable from "./StudentDashboardTable";
import React, { useState } from "react";
import MainNavbButtons from "../../../components/NavButtons/MainNavButtons";
import StudentProfile from "./StudentProfile";
import ToBeSubmitted from "./ToBeSubmitted";

const StudentDashboard = () => {
  const user = useUser();

  return (
    <div>
      <div>
        <GreetingsHeader name={user?.firstname || "Name Here"} />
      </div>
      <div className={StudentCSS.table_header}></div>
      <StudentProfile />
      <div className={StudentCSS.table_header}>
        <h2>Submitted Documents</h2>
      </div>
      <StudentDashboardTable />
      <div className={StudentCSS.table_header}>
        <h2>To Be Submitted Documents</h2>
      </div>
      <ToBeSubmitted />
    </div>
  );
};

export default StudentDashboard;
