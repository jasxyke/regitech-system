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
        className={TableCss.view + " fw-bold p-0 w-100 rounded-pill border-0"}
        onClick={handleShow}
        size="sm"
      >
        View
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered // Center the modal vertically and horizontally
      >
        <Modal.Header className={TableCss.modalHead} closeButton>
          <Modal.Title>{document.document_type.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <img
            src={document.url}
            alt="Image Preview"
            className={TableCss.imagePreview}
            width={"100%"}
          />
        </Modal.Body>
        <Modal.Footer>
          <Form>
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              label="with copies"
              checked={haveCopies}
              onChange={(e) => {
                setHaveCopies(!haveCopies);
              }}
            />
          </Form>
          <Button
            className={TableCss.approveModal}
            onClick={() => {
              handleVerify(document.id, 1, haveCopies);
              handleClose();
            }}
          >
            APPROVE
          </Button>
          <Button
            className={TableCss.rejectModal}
            onClick={() => {
              handleVerify(document.id, 2, haveCopies);
              handleClose();
            }}
          >
            REJECT
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DocumentModal;
