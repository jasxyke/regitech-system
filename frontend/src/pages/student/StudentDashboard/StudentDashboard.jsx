import { useEffect, useState } from "react";
import LoadingPage from "../../../components/LoadingPage";
import ResponseModal from "../../../components/ResponseModal";
import { useUser } from "../../../context/UserContext";
import usePdf from "../../../hooks/usePdf";
import useSubmittedDocuments from "../../../hooks/useSubmittedDocuments";
import PdfDocumentsTable from "./PdfDocumentsTable";
import StudentCSS from "./StudentDashboard.module.css";
import StudentDashboardTable from "./StudentDashboardTable";
import StudentProfile from "./StudentProfile";

const StudentDashboard = () => {
  const student = useUser();

  const [responseMsg, setResponseMsg] = useState("");
  const [showResponseModal, setShowResponseModal] = useState(false);
  const closeModal = () => {
    setShowResponseModal(false);
  };
  const openModal = () => {
    setShowResponseModal(true);
  };

  const submittedDocsHook = useSubmittedDocuments();
  const submittedDocuments = submittedDocsHook.submittedDocuments;
  const setSubmittedDocuments = submittedDocsHook.setSubmittedDocuments;

  const handleDeleteDocument = (documentId, responseMsg) => {
    let newSubmittedDocs = submittedDocuments.filter(
      (doc) => doc.id != documentId
    );
    setSubmittedDocuments(newSubmittedDocs);

    setResponseMsg(responseMsg);
    openModal();
  };

  if (student === null) {
    return <LoadingPage />;
  }

  return (
    <div className="mb-5">
      <div className="mb-3">
        <div className={StudentCSS.table_header}>
          <h2>
            <strong>Student Record View</strong>
          </h2>
        </div>
      </div>
      <StudentProfile student={student} />
      <div className={StudentCSS.table_header}>
        <h2 className="me-auto">
          <b>Documents status</b>
        </h2>
      </div>
      <StudentDashboardTable
        submittedDocuments={submittedDocuments}
        handleDeleteDocument={handleDeleteDocument}
        submittedDocsHook={submittedDocsHook}
        student={student}
      />
      <div className={StudentCSS.table_header}>
        <h2>
          <strong>PDF Documents</strong>
        </h2>
      </div>
      <PdfDocumentsTable student={student} />
      <ResponseModal
        headerText={"About to delete file"}
        show={showResponseModal}
        handleClose={closeModal}
        response={responseMsg}
      />
    </div>
  );
};

export default StudentDashboard;
