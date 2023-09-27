import { formatFullName } from "../../../utils/dataFormatter";
import TableCss from "./StudentDashboard.module.css";

const getStatusColor = (status) => {
  if (status === "Verified") {
    return "#00a651";
  } else if (status === "Rejected") {
    return "#790000";
  } else {
    return "#f68e56"; // Default color for "Pending"
  }
};

const SubmittedDocumentRows = ({ submittedDocuments, deleteDocument }) => {
  const tableRows = submittedDocuments.map((document, index) => (
    <tr key={document.id}>
      <td className="bg-grey">{document.document_type.name}</td>
      <td className="bg-grey">
        <button
          disabled
          className={TableCss.status + " fw-bold rounded-pill border-0"}
          style={{
            backgroundColor: getStatusColor(document.document_status.name),
          }}
        >
          {document.document_status.name}
        </button>
      </td>
      <td className="bg-grey">
        {document.updated_by_id !== document.student_id
          ? formatFullName(
              document.updated_by.firstname,
              document.updated_by.lastname,
              document.updated_by.midname,
              false
            )
          : ""}
      </td>
    </tr>
  ));

  return <>{tableRows}</>;
};

export default SubmittedDocumentRows;
