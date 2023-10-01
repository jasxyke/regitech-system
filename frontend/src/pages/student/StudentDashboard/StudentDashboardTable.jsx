import TableCss from "./StudentDashboard.module.css";
import useDocuments from "../../../hooks/useDocuments";
import SubmittedDocumentRows from "./SubmittedDocumentRows";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import LoadingTable from "../../../components/ui/LoadingTable";

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
    <div className={"my-2 " + TableCss.fullTable}>
      <table className="table table-responsive table-hover my-0">
        <thead>
          <tr className={TableCss.table_head}>
            <th scope="col">Document Submitted</th>
            <th scope="col">Document Status</th>
            <th scope="col">Last checked by</th>
          </tr>
        </thead>
        <tbody className={TableCss.table_contents}>
          <LoadingTable
            recordDescription={"documents checklist record"}
            records={submittedDocuments}
            loading={submittedDocsHook.loading}
            table={
              <SubmittedDocumentRows
                submittedDocuments={submittedDocuments}
                deleteDocument={deleteDocument}
              />
            }
          />
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashboardTable;
