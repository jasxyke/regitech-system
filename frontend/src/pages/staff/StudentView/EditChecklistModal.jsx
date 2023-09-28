import { useState } from "react";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import { Modal } from "react-bootstrap";
import AlertResponse from "../../../components/ui/AlertResponse";
import DocumentsChecklist from "../ManualEntry/DocumentsChecklist";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import useMasterlist from "../../../hooks/useMasterlist";

const EditChecklistModal = ({
  student,
  documentsChecklist,
  onCheklistUpdate,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setResponse("");
    setError("");
  };
  const handleShow = () => setShow(true);

  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSuccess = (message, updatedChecklist) => {
    setResponse(message);
    onCheklistUpdate(updatedChecklist);
  };

  const handleError = (error) => {
    setError(error);
  };

  const [checklist, setChecklist] = useState(documentsChecklist);

  const masterlist = useMasterlist(handleError, handleSuccess);

  const saveChecklist = () => {
    setResponse("");
    setError("");
    masterlist.saveChecklist(student.id, checklist);
  };

  return (
    <>
      <PrimaryButton
        text={"Edit checklist"}
        onClick={handleShow}
        color="main"
      />

      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header className="modalHead" closeVariant="white" closeButton>
          <Modal.Title>Edit checklist</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <AlertResponse response={response} error={error} />
          <div>
            <DocumentsChecklist
              documents={checklist}
              setDocuments={setChecklist}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <SecondaryButton text={"Cancel"} onClick={handleClose} />
          <PrimaryButton
            text={"Save checklist"}
            onClick={saveChecklist}
            loading={masterlist.loading}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditChecklistModal;
