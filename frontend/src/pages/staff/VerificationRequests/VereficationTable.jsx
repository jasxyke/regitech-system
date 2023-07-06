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
    <table className="table table-hover fw-bold text-center rounded-top rounded-bottom  table-borderless ">
      <thead className={`align-middle ${TableCss.tablehead}`}>
        <tr>
          <th scope="col">Transaction ID</th>
          <th scope="col">Name</th>
          <th scope="col">Document Submitted</th>
          <th scope="col">Document Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody className={TableCss.tablebody}>
        {documents !== null && (
          <Documents documents={documents} handleVerify={verifyDocument} />
        )}
      </tbody>
    </table>
  );
}

export default VerificationTable;
