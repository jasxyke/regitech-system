import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import css from "./StudentDashboard.module.css";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import SecondaryButton from "../../../components/ui/SecondaryButton";

const DeleteDocumentModal = ({ handleDeleteDocument, documentId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        className={css.view + " fw-bold p-0 w-100 rounded-pill border-0"}
        onClick={handleShow}
        size="sm"
      >
        Delete
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        centered // Center the modal vertically and horizontally
      >
        <Modal.Header className={css.modalHead} closeButton>
          <Modal.Title>Document Name</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <h2>Are you sure want to delete this document?</h2>
        </Modal.Body>
        <Modal.Footer>
          <SecondaryButton
            text={"Yes"}
            onClick={() => handleDeleteDocument(documentId)}
          />
          <PrimaryButton text={"No"} onClick={handleClose} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteDocumentModal;
