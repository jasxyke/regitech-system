import css from "./StaffDashboard.module.css";
import React, { useState } from "react";
import VerificationRequest from "./VerificationRequest";
import useVerificationRequests from "../../../hooks/useVerificationRequests";

const VerificationRequestTable = () => {
  const requestsHook = useVerificationRequests();
  const requests = requestsHook.verificationRequests;
  const handleView = requestsHook.viewRequests;

  return (
    <div className="d-flex justify-content-center">
      <table className={css.table}>
        <thead className={css.thead}>
          <tr>
            <th>Date Submitted</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Reviewed</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {requests !== null && (
            <VerificationRequest
              verificationRequests={requests}
              handleView={handleView}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VerificationRequestTable;
