import TableCss from "../VerificationRequests/Verification.module.css";
import VerificationTable from "../VerificationRequests/VereficationTable";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDocuments from "../../../hooks/useDocuments";
import useVerifyDocument from "../../../hooks/useVerifyDocument";
import ResponseModal from "../../../components/ResponseModal";
import { Spinner } from "react-bootstrap";
import { getCurrentDate } from "../../../utils/datesHandler";

const VerificationPage = () => {
  const navigate = useNavigate();

  const [documents, setDocuments] = useState(null);
  const [note, setNote] = useState("");
  const { id } = useParams();
  const documentsHook = useDocuments();
  useEffect(() => {
    documentsHook.getDocuments(id, setDocuments);
  }, []);

  const [response, setResponse] = useState(null);

  const [showModal, setshowModal] = useState(false);

  const handleClose = () => {
    navigate("/staff/dashboard");
  };

  const handleResponse = (response) => {
    setResponse(response.message);
  };

  const handleError = (error) => {
    setResponse(error.response?.data?.message);
  };

  const verifyDocuments = () => {
    setshowModal(true);
    setResponse(
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status" />
      </div>
    );
    let verifiedDocumentsHook = useVerifyDocument({
      handleResponse,
      handleError,
    });
    verifiedDocumentsHook.verifyDocuments(id, documents, note);
  };

  return (
    <div className="mt-5">
      <button
        className={
          TableCss.back + " my-3 fw-bold rounded-top rounded-bottom border-0"
        }
      >
        Back
      </button>
      <div className="row">
        <div className="col">
          <p
            className={
              TableCss.title + " text-start fs-4 m-1 fw-bold fst-italic"
            }
          >
            Submitted Documents Verification
          </p>
        </div>
        <div className="col">
          <p className={TableCss.title + "  text-end fs-6 m-1 fst-italic"}>
            {getCurrentDate()}
          </p>
        </div>
      </div>
      <VerificationTable documents={documents} setDocuments={setDocuments} />
      <div className="mt-3 mb-3">
        <label htmlFor="note" className="form-label">
          <strong>Registrar note:</strong>
        </label>
        <input
          className="form-control"
          name="note"
          type="text"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
      </div>
      <div className="text-end mb-5">
        <button
          className={
            TableCss.cancel +
            " fw-bold px-2 me-4 rounded-top rounded-bottom border-0"
          }
          onClick={handleClose}
        >
          CANCEL
        </button>
        <button
          onClick={verifyDocuments}
          className={
            TableCss.done + " fw-bold px-2 rounded-top rounded-bottom border-0"
          }
        >
          DONE
        </button>
        <ResponseModal
          headerText={""}
          response={response}
          show={showModal}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

export default VerificationPage;
