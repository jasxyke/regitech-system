import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import TableCss from "../VerificationRequests/Verification.module.css";

function DocumentModal({ document, withCopies, handleVerify }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [haveCopies, setHaveCopies] = useState(withCopies);

  return (
    <>
      <Button
        className={"py-1 mx-auto px-0 rounded-pill border-0 " + TableCss.view}
        onClick={handleShow}

      >
        View
      </Button>

      <Modal
        contentClassName={TableCss.verify_modal}
        show={show}
        onHide={handleClose}
        centered // Center the modal vertically and horizontally
      >
        <Modal.Header 
          className={"px-4 " + TableCss.modalHead} 
          closeVariant="white" 
          closeButton
        >
          <Modal.Title>{document.document_type.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={"d-flex justify-content-center " + TableCss.modalBody}>
          <img
            src={document.url}
            alt="Image Preview"
            className={TableCss.imagePreview}
            width={"100%"}
          />
        </Modal.Body>
        <Modal.Footer>
          <form>
            <input 
              className={"form-check-input " + TableCss.with_copies}
              type="checkbox" 
              value=""
              checked={haveCopies}
              onChange={(e) => {
                setHaveCopies(!haveCopies);
              }} />
            <label className="form-check-label mx-2 text-muted ">with copies</label>
          
          </form>
          <Button
            className={TableCss.approveModal}
            onClick={() => {
              handleVerify(document.id, 1, haveCopies);
              handleClose();
            }}
          >
            Approve
          </Button>
          <Button
            className={TableCss.rejectModal}
            onClick={() => {
              handleVerify(document.id, 2, haveCopies);
              handleClose();
            }}
          >
            Reject
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DocumentModal;
