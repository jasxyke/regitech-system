import StudentCSS from "./StudentDashboard.module.css";
import React, { useState } from "react";
import { useUser } from "../../../context/UserContext";
import StudentDashboardTable from "./StudentDashboardTable";
import { Table } from "react-bootstrap";

const Ewan = ({ student }) => {
  const user = student;
  return (
    <div className="table-container rounded-top rounded-bottom">
      <table className="table table-borderless fw-bold rounded-top rounded-bottom">
        <thead className={StudentCSS.tableHead}>
          <tr>
            <th scope="col">Student profile</th>
          </tr>
        </thead>
        <tbody className={StudentCSS.tablebody}>
          <tr>
            <td>
              <span
                className={
                  StudentCSS.studentInfo + " rounded-top rounded-bottom"
                }
              >
                Fullname: {user?.user?.firstname + " " + user.user.lastname}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span
                className={
                  StudentCSS.studentInfo + " rounded-top rounded-bottom"
                }
              >
                Email address: {user?.user?.email}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span
                className={
                  StudentCSS.studentInfo + " rounded-top rounded-bottom"
                }
              >
                Course: {user?.course?.name}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span
                className={
                  StudentCSS.studentInfo + " rounded-top rounded-bottom"
                }
              >
                Year admitted: {user?.year_admitted}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span
                className={
                  StudentCSS.studentInfo + " rounded-top rounded-bottom"
                }
              >
                Status: {user?.student_status?.name}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ewan;
