import { useEffect, useRef, useState } from "react";

import Modal from "react-bootstrap/Modal";

import TableCss from "./StudentDashboard.module.css";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import { documentTypes } from "../../../data/constants";
import { Alert } from "react-bootstrap";

function UploadDocumentModal({ availableDocumentTypes, addDocument }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [haveCopies, setHaveCopies] = useState(false);
  const [document, setDocument] = useState(null);
  const [documentType, setDocumentType] = useState(
    availableDocumentTypes[0].id
  );

  useEffect(() => {
    setDocumentType(availableDocumentTypes[0].id);
  }, [availableDocumentTypes]);

  const [showError, setShowError] = useState(false);

  const documentRef = useRef(null);

  const documentTypeOptions = availableDocumentTypes.map((docType) => (
    <option key={docType.id} value={docType.id}>
      {docType.name}
    </option>
  ));

  const resetForm = () => {
    setShowError(false);
    setHaveCopies(false);
    setDocument(null);
  };

  return (
    <>
      <SecondaryButton text={"Add document"} onClick={handleShow} />

      <Modal
        show={show}
        onHide={handleClose}
        centered // Center the modal vertically and horizontally
      >
        <Modal.Header className={TableCss.modalHead} closeButton>
          <Modal.Title>Upload your documents here</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          {showError && (
            <Alert variant="danger">{"Please select a file"}</Alert>
          )}
          <div className="mb-3">
            <label htmlFor="document-type" className="form-label">
              Select Document Type
            </label>
            <select
              value={documentType}
              name="document-type"
              className="form-select"
              onChange={(e) => {
                setDocumentType(e.target.value);
              }}
            >
              {documentTypeOptions}
            </select>
          </div>
          <label className="mb-2" htmlFor="file-type">
            <strong>Choose your file</strong>
          </label>
          <div className={TableCss.fileBox}>
            <input
              ref={documentRef}
              type="file"
              className="form-control"
              name="file-type"
              accept="image/*"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setDocument(e.target.files[0]);
              }}
            />
            <PrimaryButton
              text={"Remove"}
              onClick={() => {
                documentRef.current.value = null;
              }}
            />
          </div>
          <p>Please upload appropriate file type...</p>
          <div className="mt-3 mb-3">
            <input
              name="with_copies"
              type="checkbox"
              className="form-check-input"
              checked={haveCopies}
              onChange={() => setHaveCopies(!haveCopies)}
            />
            <label htmlFor="with_copies" className="form-check-label">
              With photocopies
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <PrimaryButton
            text={"add"}
            onClick={() => {
              if (document !== null) {
                console.log("with copies: ", haveCopies);
                addDocument(
                  document,
                  {
                    with_copies: haveCopies,
                    document_type: documentTypes.find(
                      (docType) => docType.id == documentType
                    ).name,
                    document_type_id: documentType,
                    document_status: "Pending Submission",
                  },
                  resetForm
                );

                handleClose();
              } else {
                console.log("no file");
                setShowError(true);
              }
            }}
          />
          <SecondaryButton text={"Close"} onClick={handleClose} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UploadDocumentModal;
