import StaffStyles from "./StaffDashboard.module.css";
import React, { useState } from "react";
import VerificationRequest from "./VerificationRequest";
import useVerificationRequests from "../../../hooks/useVerificationRequests";

const VerificationRequestTable = () => {
  const requestsHook = useVerificationRequests();
  const requests = requestsHook.verificationRequests;
  const handleView = requestsHook.viewRequests;

  return (
    <div className={"mx-auto " + StaffStyles.staff_table_container}>
      <div className="mt-5">
        <h4>
          <strong className={StaffStyles.table_header}> Verification Requests </strong>
        </h4>
      </div>
      <div className={"my-3 " + StaffStyles.table}>
        <table className="table table-hover my-0">
          <thead>
            <tr className={StaffStyles.table_head}>
              <th className="col-sm-2">ID</th>
              <th className="col-sm-3">First Name</th>
              <th className="col-sm-2">Last Name</th>
              <th className="col-sm-3">Reviewed</th>
              <th className="col-sm-2"> Actions </th>
            </tr>
          </thead>
          <tbody className={StaffStyles.table_contents}>
            {verificationRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.firstName}</td>
                <td>{request.lastName}</td>
                <td>
                  <div
                    className={
                      request.reviewStatus === "Yes"
                        ? `${"mx-auto " + StaffStyles.reviewStatusYes}`
                        : `${"mx-auto " + StaffStyles.reviewStatusNo}`
                    }
                  >
                    {request.reviewStatus}
                  </div>
                </td>
                <td>
                    <button 
                      className={"btn py-1 mx-auto px-0 rounded-pill my-0 " + StaffStyles.viewBtn} 
                      onClick={() => handleView(request.id)}> View </button>
                      
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerificationRequestTable;
