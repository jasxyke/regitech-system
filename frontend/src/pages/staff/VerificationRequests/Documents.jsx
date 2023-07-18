import TableCss from "../VerificationRequests/Verification.module.css";
import Modal from "./DocumentModal";
import { useUser } from "../../../context/UserContext";
import DocumentModal from "./DocumentModal";

const getStatusColor = (status) => {
  if (status === "Verified") {
    return "var(--status-green)";
  } else if (status === "Rejected") {
    return "var(--primary-maroon)";
  } else if (status === "Pending Submission" || status === "Pending Aproval") {
    return "var(--status-yellow)";
  } else {
    return "var(--status-orange)"; // Default color for "Missing"
  }
};

const Documents = ({ documents, handleVerify }) => {
  const TableItems = documents.map((document) => (
    <tr key={document.id}>
      <td>{document.id}</td>
      <td>{document.student.user.firstname}</td>
      <td>{document.document_type.name}</td>
      <td>
        <button
          disabled
          className={"rounded-pill border-0 py-1 " + TableCss.status}
          style={{
            backgroundColor: getStatusColor(document.document_status.name),
          }}
        >
          {document.document_status.name}
        </button>
      </td>
      <td>
        <DocumentModal
          document={document}
          withCopies={document.with_copies}
          handleVerify={handleVerify}
        />
      </td>
    </tr>
  ));

  return <>{TableItems}</>;
};

export default Documents;
