import { useEffect, useState } from "react";
import GreetingsHeader from "../../../components/GreetingsHeader";
import { useUser } from "../../../context/UserContext";
import StudentCSS from "./StudentDashboard.module.css";
import StudentDashboardTable from "./StudentDashboardTable";
import StudentProfile from "./StudentProfile";
import ToBeSubmitted from "./ToBeSubmitted";
import useUploadHandler from "../../../hooks/useUploadHandler";
import useDocuments from "../../../hooks/useDocuments";
import useSubmittedDocuments from "../../../hooks/useSubmittedDocuments";
import ResponseModal from "../../../components/ResponseModal";
import LoadingPage from "../../../components/LoadingPage";
import { documentTypes } from "../../../data/constants";

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
  const pendingDocumentsHook = useUploadHandler();
  const pendingDocuments = pendingDocumentsHook.pendingDocuments;
  const pendingDocumentTypes = pendingDocumentsHook.documentInfos;
  const addDocument = pendingDocumentsHook.addDocument;
  const removeDocument = pendingDocumentsHook.removeDocument;
  // available documents for dropdown list (select tag)
  const [availableDocumentTypes, setAvailableDocumentTypes] = useState(null);
  useEffect(() => {
    let filteredDocTypes = documentTypes;
    if (submittedDocuments !== null) {
      filteredDocTypes = filteredDocTypes.filter((docType) => {
        const isInSubmittedDocs = submittedDocuments.some(
          (submittedDoc) => submittedDoc.document_type.id == docType.id
        );

        return !isInSubmittedDocs;
      });
    }
    if (pendingDocuments !== null) {
      filteredDocTypes = filteredDocTypes.filter((docType) => {
        const isInPendingDocs = pendingDocumentTypes.some(
          (pendingDoc) => pendingDoc.document_type_id == docType.id
        );

        return !isInPendingDocs;
      });
    }

    setAvailableDocumentTypes(filteredDocTypes);
  }, [submittedDocuments, pendingDocuments]);

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
        <strong>
          <h2>To Be Submitted Documents</h2>
        </strong>
      </div>
      <ToBeSubmitted
        pendingDocuments={pendingDocuments}
        availableDocumentTypes={availableDocumentTypes}
        handleAddDocument={addDocument}
        handleRemoveDocument={removeDocument}
        handleSubmitDocument={pendingDocumentsHook.uploadDocuments}
      />
      <div className={StudentCSS.table_header}>
        <h2>
          <strong>Submitted Documents</strong>
        </h2>
      </div>
      <StudentDashboardTable
        submittedDocuments={submittedDocuments}
        handleDeleteDocument={handleDeleteDocument}
        submittedDocsHook={submittedDocsHook}
        student={student}
      />
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
