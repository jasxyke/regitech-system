import { useState } from "react";
import { Modal } from "react-bootstrap";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import DocumentsChecklist from "../ManualEntry/DocumentsChecklist";
import SecondaryButton from "../../../components/ui/SecondaryButton";

const EditStudentDocumentsModal = ({ documents }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [documentsChecklist, setDocumentsChecklist] = useState(documents);

  const saveChecklist = () => {
    console.log("save checklist");
  };
  return (
    <>
      <PrimaryButton
        text={"Edit checklist"}
        onClick={() => {
          console.log("open modal");
          handleShow();
        }}
        color={"primary"}
      />
      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header className="modalHead" closeVariant="white" closeButton>
          <Modal.Title>Edit checklist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DocumentsChecklist
            documents={documentsChecklist}
            setDocuments={setDocumentsChecklist}
          />
        </Modal.Body>
        <Modal.Footer>
          <SecondaryButton text={"Cancel"} onClick={handleClose} />
          <PrimaryButton
            text={"Save"}
            onClick={() => {
              saveChecklist;
            }}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditStudentDocumentsModal;
