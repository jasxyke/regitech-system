import StaffStyles from "./StaffDashboard.module.css";
import React, { useEffect, useState } from "react";
import VerificationRequest from "./VerificationRequest";
import useVerificationRequests from "../../../hooks/useVerificationRequests";
import { convertStampToDate } from "../../../utils/datesHandler";

const VerificationRequestTable = () => {
  const requestsHook = useVerificationRequests();
  const requests = requestsHook.verificationRequests;
  const handleView = requestsHook.viewRequests;
  useEffect(() => {
    requestsHook.getVerificationRequets();
  }, []);

  return (
    <div className={"mx-auto " + StaffStyles.staff_table_container}>
      <div className="mt-5">
        <h4>
          <strong className={StaffStyles.table_header}>
            {" "}
            Verification Requests{" "}
          </strong>
        </h4>
      </div>
      <div className={"my-3 " + StaffStyles.table}>
        <table className="table table-hover my-0">
          <thead>
            <tr className={StaffStyles.table_head}>
              <th className="col-sm-2">Date submitted</th>
              <th className="col-sm-3">First Name</th>
              <th className="col-sm-2">Last Name</th>
              <th className="col-sm-3">Reviewed</th>
              <th className="col-sm-2"> Actions </th>
            </tr>
          </thead>
          <tbody className={StaffStyles.table_contents}>
            {requests !== null && (
              <VerificationRequest
                verificationRequests={requests}
                handleView={handleView}
              />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerificationRequestTable;
