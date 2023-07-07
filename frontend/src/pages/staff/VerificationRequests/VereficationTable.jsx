import { useParams } from "react-router-dom";
import useDocuments from "../../../hooks/useDocuments";
import TableCss from "../VerificationRequests/Verification.module.css";
import { useEffect, useState } from "react";
import Documents from "./Documents";
import { documentStatuses } from "../../../data/constants";

function VerificationTable({ documents, setDocuments }) {
  const verifyDocument = (id, status_id, withCopies) => {
    const editedDocuments = documents.map((doc) => {
      if (doc.id == id) {
        return {
          ...doc,
          document_status_id: status_id,
          document_status: documentStatuses.find((status) => {
            return status.id == status_id;
          }),
          with_copies: withCopies,
        };
      }
      return doc;
    });
    setDocuments(editedDocuments);
  };

  return (
    <div className={"my-2 " + TableCss.table}>
      <table className="table table-hover text-center rounded-top rounded-bottom my-0">
        <thead>
          <tr className={TableCss.tablehead}>
            <th className="col-sm-2">Transaction ID</th>
            <th className="col-sm-3">Name</th>
            <th className="col-sm-2">Document Submitted</th>
            <th className="col-sm-3">Document Status</th>
            <th className="col-sm-2">Actions</th>
          </tr>
        </thead>
        <tbody className={TableCss.tablebody}>
          {documents !== null && (
            <Documents documents={documents} handleVerify={verifyDocument} />
          )}
        </tbody>
      </table>
    </div>
    
  );
}

export default VerificationTable;
