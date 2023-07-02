import StudentCSS from "./StudentDashboard.module.css";
import React, { useState } from "react";
import { useUser } from "../../../context/UserContext";
import StudentDashboardTable from "./StudentDashboardTable";

const Ewan = () => {
  const user = useUser();
  return (
    <table className="table table-responsive-lg">
      <thead>
        <tr className={StudentCSS.table}>
          <th className={StudentCSS.col}>Student Profile</th>
        </tr>
        <td>
          <div>
            <tr className={StudentCSS.StudentProfile}>
              Fullname: Juan Dela Cruz
            </tr>
          </div>
          <div>
            <tr className={StudentCSS.StudentProfile}>
              Email Address: juandelacruz@gmail.com
            </tr>
          </div>
          <div>
            <tr className={StudentCSS.StudentProfile}>
              Course: Diploma in Information Communication Technology
            </tr>
          </div>
          <div>
            <tr className={StudentCSS.StudentProfile}>Year Admitted: 2021</tr>
          </div>
          <div>
            <tr className={StudentCSS.StudentProfile}>Status:</tr>
          </div>
        </td>
      </thead>
    </table>
  );
};

export default Ewan;
