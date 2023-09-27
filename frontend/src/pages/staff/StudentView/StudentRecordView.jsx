import { useEffect, useState } from "react";
import GreetingsHeader from "../../../components/GreetingsHeader";
import LoadingPage from "../../../components/LoadingPage";
import ResponseModal from "../../../components/ResponseModal";
import BackButton from "../../../components/ui/BackButton";
import usePdf from "../../../hooks/usePdf";
import useSubmittedDocuments from "../../../hooks/useSubmittedDocuments";
import PdfDocumentsTable from "../../student/StudentDashboard/PdfDocumentsTable";
import StudentDashboardTable from "../../student/StudentDashboard/StudentDashboardTable";
import StudentProfile from "../../student/StudentDashboard/StudentProfile";
import EditProfileModal from "./EditProfileModal";
import EditStudentDocumentsModal from "./EditStudentDocumentsModal";
import StudentCSS from "./StudentDashboard.module.css";

const StudentRecordView = ({ studentProp }) => {
  const [student, setStudent] = useState(studentProp);
  const pdfHook = usePdf();
  const pdfs = pdfHook.studentPdfs;
  useEffect(() => {
    pdfHook.getAllPdfs(student.id);
  }, []);
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
  const setSubmittedDocuments = submittedDocsHook.updateDocuments;

  const handleDeleteDocument = (documentId, responseMsg) => {
    let newSubmittedDocs = submittedDocuments.filter(
      (doc) => doc.id != documentId
    );
    setSubmittedDocuments(newSubmittedDocs);

    setResponseMsg(responseMsg);
    openModal();
  };

  const updateStudent = (student) => {
    setStudent(student);
  };

  if (student === null) {
    return <LoadingPage />;
  }
  return (
    <div className="mb-5">
      <div className="mb-3">
        {studentProp !== null && (
          <BackButton
            text={"Back to dashboard"}
            alt={"/staff/student-records"}
          />
        )}
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
      <div className={StudentCSS.studProfile}>
        <StudentProfile student={student} />
        <EditProfileModal student={student} updateStudent={updateStudent} />
      </div>
      <div className={StudentCSS.table_header}>
        <h2 className="me-auto">
          <b>Documents checklist</b>
        </h2>
        {studentProp !== null && submittedDocuments !== null && (
          <EditStudentDocumentsModal
            documents={submittedDocuments}
            student={student}
            onChecklistUpdate={setSubmittedDocuments}
            onPdfListUpdate={pdfHook.addPdf}
          />
        )}
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
      <PdfDocumentsTable pdfs={pdfs} loading={pdfHook.loading} />
      <ResponseModal
        headerText={"About to delete file"}
        show={showResponseModal}
        handleClose={closeModal}
        response={responseMsg}
      />
    </div>
  );
};

export default StudentRecordView;
