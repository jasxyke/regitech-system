import React, { useState } from "react";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import { Modal } from "react-bootstrap";
import css from "./Verification.module.css";
import PrimaryButton from "../../../components/ui/PrimaryButton";

const EditPdfModal = ({ show, handleClose, handleShow, handleEdit }) => {
  const [pageNumber, setPageNumber] = useState("");
  return (
    <>
      <SecondaryButton text={"Edit"} onClick={handleShow} />
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          className={css.modalHead}
          closeVariant="white"
          closeButton
        >
          <Modal.Title>Edit PDF</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="page-num" className="form-label">
            Page number to delete
          </label>
          <input
            className="form-control"
            type="text"
            value={pageNumber}
            onChange={(e) => {
              setPageNumber(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <SecondaryButton text={"Cancel"} onClick={handleClose} />
          <PrimaryButton
            text={"Remove page"}
            onClick={() => {
              handleEdit(pageNumber);
            }}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditPdfModal;
