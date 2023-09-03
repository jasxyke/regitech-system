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
import PrimaryButton from "../../../components/ui/PrimaryButton";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../components/ui/BackButton";
import SectionHeader from "../../../components/SectionHeader";

const StudentDashboard = ({ studentProp = null }) => {
  const student = studentProp !== null ? studentProp : useUser();
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
        {studentProp !== null && <BackButton text={"Back to dashboard"} />}
        {studentProp === null ? (
          <GreetingsHeader name={student?.user?.firstname || "Name Here"} />
        ) : (
          <div className={StudentCSS.table_header}>
            <h2>
              <strong>Student Record View</strong>
            </h2>
          </div>
        )}
      </div>
      <StudentProfile student={student} />
      <div className={StudentCSS.table_header}>
        <h2>
          <b>Document status</b>
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
