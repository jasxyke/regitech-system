import TableCss from "../VerificationRequests/Verification.module.css";
import Modal from "./DocumentModal";
import { useUser } from "../../../context/UserContext";
import DocumentModal from "./DocumentModal";

const getStatusColor = (status) => {
  if (status === "Accepted") {
    return "#00a651";
  } else if (status === "Rejected") {
    return "#790000";
  } else {
    return "#f68e56"; // Default color for "Pending"
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
          className={TableCss.status + " fw-bold w-75 rounded-pill border-0"}
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
