import { Modal } from "react-bootstrap";
import css from "./ResponseModal.module.css";
import PrimaryButton from "./ui/PrimaryButton";

const ResponseModal = ({ show, handleClose, response, headerText }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className={css.modalHead} closeVariant="white">
        <Modal.Title>{headerText}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{response}</Modal.Body>
      <Modal.Footer>
        <PrimaryButton text={"Ok"} onClick={handleClose} />
      </Modal.Footer>
    </Modal>
  );
};

export default ResponseModal;
