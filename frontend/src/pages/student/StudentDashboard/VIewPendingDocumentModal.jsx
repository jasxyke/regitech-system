import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import css from "./StudentDashboard.module.css";
import PrimaryButton from "../../../components/ui/PrimaryButton";

const ViewPendingDocumentModal = ({ document, with_copies, documentType }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [imgSrc, setImgSrc] = useState(null);

  const reader = new FileReader();
  reader.onloadend = () => {
    setImgSrc(reader.result);
  };

  reader.readAsDataURL(document);
  return (
    <>
      <Button
        className={css.view + " fw-bold p-0 w-100 rounded-pill border-0"}
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
        <Modal.Header className={css.modalHead} closeButton>
          <Modal.Title>{documentType}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <img
            src={imgSrc}
            alt="Image Preview"
            className={css.imagePreview}
            width={"100%"}
          />
          <div className="mt-3 mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              defaultChecked={with_copies}
            />

            <label htmlFor="with-copies" className="form-check-label">
              With copies
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <PrimaryButton text={"Close"} onClick={handleClose} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewPendingDocumentModal;
