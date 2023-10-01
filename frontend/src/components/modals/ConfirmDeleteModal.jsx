import { useState } from "react";
import { Modal } from "react-bootstrap";
import SecondaryButton from "../ui/SecondaryButton";
import PrimaryButton from "../ui/PrimaryButton";

const ConfirmDeleteModal = ({ handleDelete, id, headerText, message }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className={"btn btn-outline rounded-pill delete-btn"}
        onClick={handleShow}
      >
        {" "}
        Delete{" "}
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        centered // Center the modal vertically and horizontally
      >
        <Modal.Header className={"modalHead"} closeVariant="white" closeButton>
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">{message}</Modal.Body>
        <Modal.Footer>
          <SecondaryButton text={"Yes"} onClick={() => handleDelete(id)} />
          <PrimaryButton text={"No"} onClick={handleClose} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmDeleteModal;
