import React from "react";
import TableCss from "../VerificationRequests/Verification.module.css";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import ApproveIcon from "../../../components/icons/ApproveIcon";
import RejectIcon from "../../../components/icons/RejectIcon";
import MissingIcon from "../../../components/icons/MissingIcon";
import SelectDocumentStatus from "../../../components/ui/SelectDocumentStatus";
import Checkbox from "../../../components/forms/Checkbox";
import SectionHeader from "../../../components/SectionHeader";
import { getStatus } from "../../../utils/getStatus";
import DocumentRow from "./DocumentRow";
import { Accordion, Alert } from "react-bootstrap";
import StudentProfile from "../../student/StudentDashboard/StudentProfile";
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

const SubmittedDocumentsVerification = ({
  documents,
  verifyDocument,
  note,
  setNote,
}) => {
  const documentRows = documents.map((document) => {
    return <DocumentRow document={document} verifyDocument={verifyDocument} />;
  });

  return (
    <div className="w-100">
      {documentRows}
      <div className="mt-3 mb-3">
        <label htmlFor="note" className="form-label">
          <strong>Registrar note:</strong>
        </label>
        <input
          className="form-control"
          name="note"
          type="text"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SubmittedDocumentsVerification;
