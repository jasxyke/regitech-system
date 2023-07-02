import StudentCSS from "./StudentDashboard.module.css";
import React, { useState } from "react";
import { useUser } from "../../../context/UserContext";
import StudentDashboardTable from "./StudentDashboardTable";

const ToBeSubmitted = () => {
  const [tobesubmitted, setToBeSubmitted] = useState([
    {
      Txid: 1234567890,
      DocumentSubmitted: "Transcript of Record",
      DocumentStatus: "Pending",
      Actions: "Delete",
    },

    {
      Txid: 1234567890,
      DocumentSubmitted: "SAR Form",
      DocumentStatus: "Received",
      Actions: "Delete",
    },

    {
      Txid: 1234567890,
      DocumentSubmitted: "Form 138",
      DocumentStatus: "Approved",
      Actions: "Delete",
    },
  ]);

  const handleView = (Txid) => {
    console.log("View request:", Txid);
  };

  return (
    <table className="table table-responsive-lg">
      <thead>
        <tr className={StudentCSS.table}>
          <th className={StudentCSS.col}>Transaction ID</th>
          <th className={StudentCSS.col}>Document Submitted</th>
          <th className={StudentCSS.col}>Document Status</th>
          <th className={StudentCSS.colActions}>Actions </th>
          <tr></tr>
        </tr>
      </thead>
      <tbody>
        {tobesubmitted.map((request) => (
          <tr key={request.Txid}>
            <td>{request.Txid}</td>
            <td>{request.DocumentSubmitted}</td>
            <td>
              <div
                className={
                  request.DocumentStatus === "Pending"
                    ? `${StudentCSS.DocumentStatusPending}`
                    : `${StudentCSS.DocumentStatusApproved}`
                }
              >
                {request.DocumentStatus}
              </div>
            </td>
            <td>
              <div className={StudentCSS.btncont}>
                <a
                  href=""
                  className={StudentCSS.viewBtn}
                  onClick={() => handleView(request.Txid)}
                >
                  Upload
                </a>
              </div>
            </td>
            <td>
              <div className={StudentCSS.btncont}>
                <a
                  href=""
                  className={StudentCSS.viewBtn}
                  onClick={() => handleView(request.Txid)}
                >
                  Delete
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToBeSubmitted;
