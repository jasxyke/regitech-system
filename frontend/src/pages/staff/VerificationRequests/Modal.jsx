import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import TableCss from "../VerificationRequests/Verification.module.css";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Modal.Title>Document Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src="path/to/your/image.jpg"
            alt="Image Preview"
            className={TableCss.imagePreview}
          />
        </Modal.Body>
        <Modal.Footer>
          <Form>
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              label="with copies"
            />
          </Form>
          <Button className={TableCss.approveModal} onClick={handleClose}>
            APPROVE
          </Button>
          <Button className={TableCss.rejectModal} onClick={handleClose}>
            REJECT
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
