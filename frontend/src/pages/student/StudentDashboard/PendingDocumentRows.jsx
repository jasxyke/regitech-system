import { Button } from "react-bootstrap";
import TableCSS from "./StudentDashboard.module.css";
import ViewPendingDocumentModal from "./VIewPendingDocumentModal";
import ViewDocumentModal from "./ViewDocumentModal";

const getStatusColor = (status) => {
  if (status === "Verified") {
    return "#00a651";
  } else if (status === "Rejected") {
    return "#790000";
  } else {
    return "#f68e56"; // Default color for "Pending"
  }
};

const PendingDocumentRows = ({ pendingDocuments, removeDocument }) => {
  const tableRows = pendingDocuments.map((document, index) => (
    <tr key={index}>
      <td>{document.documentInfo.document_type}</td>
      <td>
        <button
          disabled
          className={TableCSS.status + " fw-bold w-75 rounded-pill border-0"}
          style={{
            backgroundColor: getStatusColor(
              document.documentInfo.document_status
            ),
          }}
        >
          {document.documentInfo.document_status}
        </button>
      </td>
      <td>
        <div className={TableCSS.actionsContainer}>
          <ViewPendingDocumentModal
            document={document.document}
            with_copies={document.documentInfo.with_copies}
            documentType={document.documentInfo.document_type}
          />
          <Button
            className={
              TableCSS.view + " fw-bold p-0 w-100 rounded-pill border-0"
            }
            onClick={() =>
              removeDocument(
                document.document,
                document.documentInfo.document_type_id
              )
            }
            size="sm"
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  ));
  return <>{tableRows}</>;
};

export default PendingDocumentRows;
