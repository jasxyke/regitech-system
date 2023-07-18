import TableCss from "./StudentDashboard.module.css";
import useDocuments from "../../../hooks/useDocuments";
import SubmittedDocumentRows from "./SubmittedDocumentRows";
import { useEffect } from "react";

const StudentDashboardTable = ({
  handleDeleteDocument,
  submittedDocuments,
  submittedDocsHook,
  student,
}) => {
  useEffect(() => {
    submittedDocsHook.getSubmittedDocuments(student.id);
  }, []);
  const deleteDocument = (documentId) => {
    let documentsHook = useDocuments();
    documentsHook.deleteDocument(documentId, handleDeleteDocument);
  };
  console.log(submittedDocuments);
  return (
    <div className={"table-container rounded-top rounded-bottom"}>
      <table className="table table-borderless fw-bold text-center rounded-top rounded-bottom">
        <thead className={`align-middle ${TableCss.tableHead}`}>
          <tr>
            <th scope="col">Document Submitted</th>
            <th scope="col">Document Status</th>
          </tr>
        </thead>
        <tbody className={TableCss.tablebody}>
          {(submittedDocuments !== null || submittedDocuments === "") && (
            <SubmittedDocumentRows
              submittedDocuments={submittedDocuments}
              deleteDocument={deleteDocument}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashboardTable;
