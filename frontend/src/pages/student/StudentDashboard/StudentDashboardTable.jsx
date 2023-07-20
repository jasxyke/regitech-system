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
    <div className={"my-2 " + TableCss.table}>
      <table className="table table-hover my-0">
        <thead>
          <tr className={TableCss.table_head}>
            <th scope="col">Document Submitted</th>
            <th scope="col">Document Status</th>
          </tr>
        </thead>
        <tbody className={TableCss.table_contents}>
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
