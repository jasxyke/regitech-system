import { useEffect, useState } from "react";
import GreetingsHeader from "../../../components/GreetingsHeader";
import { useUser } from "../../../context/UserContext";
import StudentCSS from "./StudentDashboard.module.css";
import StudentDashboardTable from "./StudentDashboardTable";
import StudentProfile from "./StudentProfile";
import ToBeSubmitted from "./ToBeSubmitted";
import useUploadHandler from "../../../hooks/useUploadHandler";
import useSubmittedDocuments from "../../../hooks/useSubmittedDocuments";
import ResponseModal from "../../../components/ResponseModal";
import LoadingPage from "../../../components/LoadingPage";
import { documentTypes } from "../../../data/constants";
import PdfDocumentsTable from "./PdfDocumentsTable";

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
  // to be submitted documents
  // {
  //   with_copies: false,
  //   document_type: 'SAR FORM',
  //   document_type_id: 1,

  // }

  if (student === null) {
    return <LoadingPage />;
  }
  return (
    <div className="mb-5">
      <div className="mb-3">
        <GreetingsHeader name={student?.user?.firstname || "Name Here"} />
      </div>
      <StudentProfile />
      <div className={StudentCSS.table_header}>
        <h2>
          <strong>Document status</strong>
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
          <strong>Verification requests</strong>
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
