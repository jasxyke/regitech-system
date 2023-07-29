import React from "react";
import TableCss from "../VerificationRequests/Verification.module.css";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import ApproveIcon from "../../../components/icons/ApproveIcon";
import RejectIcon from "../../../components/icons/RejectIcon";
import MissingIcon from "../../../components/icons/MissingIcon";
const getStatusColor = (status) => {
  if (status === "Verified") {
    return "var(--status-green)";
  } else if (status === "Rejected") {
    return "var(--primary-maroon)";
  } else if (status === "Pending Submission" || status === "Pending Aproval") {
    return "var(--status-orange)";
  } else {
    return "var(--status-orange)"; // Default color for "Missing"
  }
};

const SubmittedDocumentsVerification = ({ documents, verifyDocument }) => {
  const verifyDocuments = documents.map((document) => (
    <tr key={document.id}>
      <td className="d-5">{document.document_type.name}</td>
      <td>
        <button
          disabled
          className={"rounded-pill border-0 py-1  " + TableCss.status}
          style={{
            backgroundColor: getStatusColor(document.document_status.name),
          }}
        >
          {document.document_status.name}
        </button>
      </td>
      <td>
        <div className={TableCss.verifyBtns}>
          {/* <PrimaryButton
            text={"Approve"}
            onClick={() => {
              const verifiedDoc = {
                ...document,
                document_status: { id: "1", name: "Verified" },
                document_status_id: "1",
              };
              verifyDocument(verifiedDoc);
            }}
          /> */}
          <ApproveIcon
            handleClick={() => {
              const verifiedDoc = {
                ...document,
                document_status: { id: "1", name: "Verified" },
                document_status_id: "1",
              };
              verifyDocument(verifiedDoc);
            }}
          />
          {/* <SecondaryButton
            text={"Reject"}
            onClick={() => {
              const rejectedDoc = {
                ...document,
                document_status: { id: "2", name: "Rejected" },
                document_status_id: "2",
              };
              verifyDocument(rejectedDoc);
            }}
          /> */}
          <RejectIcon
            handleClick={() => {
              const rejectedDoc = {
                ...document,
                document_status: { id: "2", name: "Rejected" },
                document_status_id: "2",
              };
              verifyDocument(rejectedDoc);
            }}
          />
          {/* <SecondaryButton
            text={"Missing"}
            onClick={() => {
              const misingDoc = {
                ...document,
                document_status: { id: "5", name: "Missing" },
                document_status_id: "5",
              };
              verifyDocument(misingDoc);
            }}
          /> */}
          <MissingIcon
            handleClick={() => {
              const misingDoc = {
                ...document,
                document_status: { id: "5", name: "Missing" },
                document_status_id: "5",
              };
              verifyDocument(misingDoc);
            }}
          />
        </div>
      </td>
    </tr>
  ));
  return (
    <div className="table-responsive">
      <table className="table table-sm table-borderless">
        <thead>
          <tr>
            <th scope="col" style={{ width: "40%" }}></th>
            <th scope="col text-center" style={{ width: "30%" }}></th>
            <th scope="col" style={{ width: "30%" }}></th>
          </tr>
        </thead>
        <tbody>{verifyDocuments}</tbody>
      </table>
    </div>
  );
};

export default SubmittedDocumentsVerification;
