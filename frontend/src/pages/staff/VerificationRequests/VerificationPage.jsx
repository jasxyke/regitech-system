import TableCss from "../VerificationRequests/Verification.module.css";
import VerificationTable from "../VerificationRequests/VereficationTable";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDocuments from "../../../hooks/useDocuments";
import useVerifyDocument from "../../../hooks/useVerifyDocument";
import ResponseModal from "../../../components/ResponseModal";
import { Spinner, Tab, Tabs } from "react-bootstrap";
import { getCurrentDate } from "../../../utils/datesHandler";
import Button from "react-bootstrap/Button";
import PdfView from "./PdfView";
import SubmittedDocumentsVerification from "./SubmittedDocumentsVerification";
import useSubmittedDocuments from "../../../hooks/useSubmittedDocuments";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import BackButton from "../../../components/ui/BackButton";
import useRequest from "../../../hooks/useRequest";
import LoadingPage from "../../../components/LoadingPage";
import SectionHeader from "../../../components/SectionHeader";
import StudentProfile from "../../student/StudentDashboard/StudentProfile";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import EditPDFs from "./EditPDFs";
import { useUser } from "../../../context/UserContext";
import usePdf from "../../../hooks/usePdf";

const VerificationPage = () => {
  const staff = useUser();

  const requestHook = useRequest();
  const request = requestHook.request;

  //pdf hooks and dependencies
  const pdfHook = usePdf();
  const allPdfs = pdfHook.studentPdfs;

  const navigate = useNavigate();
  const [note, setNote] = useState("");
  const { id, studentId } = useParams();
  const submittedDocsHook = useSubmittedDocuments();
  const documents = submittedDocsHook.submittedDocuments;

  const [pdfUrl, setPdfUrl] = useState("");

  const onLoad = (pdf) => {
    setPdfUrl(pdf.url);
  };

  useEffect(() => {
    submittedDocsHook.getSubmittedDocuments(studentId);
    requestHook.getRequest(id, onLoad);
    pdfHook.getAllPdfs(studentId);
  }, []);

  const [response, setResponse] = useState(null);
  const [showModal, setshowModal] = useState(false);

  const handleClose = () => {
    navigate("/staff/verification-requests");
  };

  const handleResponse = (response) => {
    setResponse(response.message);
  };

  const handleError = (error) => {
    setResponse(error.response?.data?.message);
  };

  const verifyDocumentsHook = useVerifyDocument({
    handleResponse,
    handleError,
  });

  const verifyDocuments = () => {
    setshowModal(true);
    setResponse(
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status" />
      </div>
    );
    verifyDocumentsHook.verifyDocuments(request.id, documents, note, staff.id);
  };

  if (request === null) {
    return <LoadingPage />;
  }

  return (
    <div className="my-5 mb-5 pb-5">
      <BackButton text={"Back to dashboard"} />
      <div className="row">
        <div className="col">
          <SectionHeader text={"Verify documents"} block={false} />
        </div>
        <div className="col">
          <p className={TableCss.title + "  text-end fs-6 m-1 fst-italic"}>
            {getCurrentDate()}
          </p>
        </div>
      </div>
      <div className={"row" + " mt-4"}>
        <div className={"col-sm-6"}>
          {pdfUrl !== null ? (
            <PdfView pdfUrl={pdfUrl} />
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" role="status" />
            </div>
          )}
        </div>
        <div className={"col-sm-6"}>
          <style type="text/css">
            {`
              .verification-tab .nav-link{
                color: var(--primary-maroon);
                font-weight: bold;
              }

              .verification-tab .nav-item{
                border: 1px solid var(--bg-grey)
              }

              .verification-tab .nav-link:hover{
                color: var(--primary-maroon)
              }

              .tab-content{
                border: 1px solid var(--bg-grey);
                padding: 10px;
              }

              .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
                color: var(--main-white);
                background-color: var(--primary-maroon);
                border-color: var(--primary-maroon);
            }
            `}
          </style>
          <Tabs
            defaultActiveKey={"checklist"}
            id="verification-tab"
            className="verification-tab"
          >
            <Tab eventKey="checklist" title="Checklist">
              <div className="mt-3"></div>
              {documents !== null && (
                <SubmittedDocumentsVerification
                  documents={documents}
                  verifyDocument={submittedDocsHook.verifyDocument}
                  note={note}
                  setNote={setNote}
                />
              )}
            </Tab>
            <Tab eventKey={"profile"} title="Student profile">
              <div className="mt-3"></div>
              <StudentProfile student={request.student} hideHeader={true} />
            </Tab>
            <Tab eventKey={"prev-request"} title="Edit PDFs">
              {allPdfs !== null ? (
                <EditPDFs
                  allPdfs={allPdfs}
                  currentPdf={request.pdf}
                  changePDF={setPdfUrl}
                />
              ) : (
                <div className="d-flex justify-content">
                  <Spinner animation="border" />
                </div>
              )}
            </Tab>
          </Tabs>

          <div className="text-end mb-5 mt-5">
            <Button
              className={"px-2 mx-1 " + TableCss.done}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              onClick={verifyDocuments}
              className={"px-2 mx-1 " + TableCss.cancel}
            >
              Done
            </Button>
            <ResponseModal
              headerText={"Server response..."}
              response={response}
              show={showModal}
              handleClose={handleClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
