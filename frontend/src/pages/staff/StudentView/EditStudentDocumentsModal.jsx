import { useRef, useState } from "react";
import { Alert, Modal, Spinner } from "react-bootstrap";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import DocumentsChecklist from "../ManualEntry/DocumentsChecklist";
import css from "./StudentDashboard.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import useMasterlist from "../../../hooks/useMasterlist";
import AlertResponse from "../../../components/ui/AlertResponse";
const EditStudentDocumentsModal = ({
  documents,
  student,
  onChecklistUpdate,
  onPdfListUpdate,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setResponse("");
    setError("");
  };
  const handleShow = () => setShow(true);

  const [pdfFile, setPdfFile] = useState(null);
  const pdfFileRef = useRef(null);
  const [note, setNote] = useState("");

  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSuccess = (message, updatedChecklist, newPdf) => {
    setResponse(message);
    onChecklistUpdate(updatedChecklist);
    onPdfListUpdate(newPdf);
  };

  const handleError = (error) => {
    setError(error);
  };

  const masterlist = useMasterlist(handleError, handleSuccess);

  const [documentsChecklist, setDocumentsChecklist] = useState(documents);
  const icon = <IoIosAddCircleOutline className="h1 my-auto" />;

  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  const addCredentials = () => {
    if (pdfFile === null) {
      setError("Please upload a pdf file");
      return;
    }
    setResponse("");
    setError("");
    masterlist.addCredentials(student.id, pdfFile, documentsChecklist, note);
  };

  return (
    <>
      <div className={css.addCredentialsBtn}>
        <PrimaryButton
          text={isMobile ? icon : "Add credentials"}
          onClick={() => {
            console.log("open modal");
            handleShow();
          }}
          color={"green"}
          size={"lg"}
        />
      </div>
      <form></form>
      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header className="modalHead" closeVariant="white" closeButton>
          <Modal.Title>Add credentials</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <AlertResponse response={response} error={error} />
          <div>
            <DocumentsChecklist
              documents={documentsChecklist}
              setDocuments={setDocumentsChecklist}
            />
          </div>

          <div className="mt-3 py-3">
            <input
              className="form-control w-100"
              name="pdf"
              type="file"
              onChange={(e) => {
                setPdfFile(e.target.files[0]);
              }}
              multiple
              accept="application/pdf"
              required
              ref={pdfFileRef}
            />
          </div>

          <label htmlFor="note" className="form-label">
            Registrar note (for email):
          </label>
          <input
            type="text"
            name="note"
            id="note"
            className="form-control"
            onChange={(e) => setNote(e.target.value)}
            value={note}
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <SecondaryButton text={"Cancel"} onClick={handleClose} />
          <PrimaryButton
            text={
              masterlist.loading ? (
                <Spinner animation="border" />
              ) : (
                "Add and save checklist"
              )
            }
            onClick={() => {
              addCredentials();
            }}
            disabled={masterlist.loading}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditStudentDocumentsModal;
