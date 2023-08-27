import React, { useEffect } from "react";
import StaffStyles from "../../staff/StaffDashboard/StaffDashboard.module.css";
import PdfDocuments from "./PdfDocuments";
import { Spinner } from "react-bootstrap";
import useRequest from "../../../hooks/useRequest";

const PdfDocumentsTable = ({ student }) => {
  const requestsHook = useRequest();
  const pdfs = requestsHook.studentRequests;
  useEffect(() => {
    requestsHook.getAllRequests(student.id);
  }, []);

  return (
    <div className={"my-3 " + StaffStyles.table}>
      <table className="table table-hover my-0">
        <thead>
          <tr className={StaffStyles.table_head}>
            <th className="col-sm-2">Date submitted</th>
            <th className="col-sm-3">Reviewed</th>
            <th className="col-sm-2"> Actions </th>
          </tr>
        </thead>
        <tbody className={StaffStyles.table_contents}>
          {/* {requests !== null && (
              <VerificationRequest
                verificationRequests={requests}
                handleView={handleView}
              />
            )} */}
          {requestsHook.loading ? (
            <tr>
              <td colSpan={5}>
                <Spinner />
              </td>
            </tr>
          ) : pdfs !== null ? (
            <PdfDocuments pdfDocuments={pdfs} />
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default PdfDocumentsTable;
