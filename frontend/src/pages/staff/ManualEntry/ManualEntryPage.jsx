import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../../../components/LoadingPage";
import SectionHeader from "../../../components/SectionHeader";
import BackButton from "../../../components/ui/BackButton";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import { useUser } from "../../../context/UserContext";
import { documentTypes } from "../../../data/constants";
import DocumentsChecklist from "./DocumentsChecklist";
import StudentAccountForm from "./StudentAccountForm";
import useMasterlist from "../../../hooks/useMasterlist";
import ResponseModal from "../../../components/ResponseModal";
import { Spinner } from "react-bootstrap";
import { clearTextInputs } from "../../../utils/InputFormClearer";
import { useFormInput } from "../../../hooks/useFormInput";

const documentsList = documentTypes.map((document_type) => {
  return { document_type, document_status_id: "5", with_copies: 0 };
});

const ManualEntryPage = () => {
  const user = useUser();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const pdfFileRef = useRef(null);

  //modal states
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    //scroll to top
    window.scrollTo(0, 0);
  };

  //form API data
  const [pdfFile, setPdfFile] = useState(null);
  const [invalidForm, setInvalidForm] = useState(false);
  const [documentsChecklist, setDocumentsChecklist] = useState(documentsList);
  const [note, setNote] = useState("");
  const [hasNoEmail, setHasNoEmail] = useState(false);

  //student account form
  const email = useFormInput("");
  const firstname = useFormInput("");
  const midname = useFormInput("");
  const lastname = useFormInput("");
  const [courseId, setCourseId] = useState("");
  const [yearAdmitted, setYearAdmitted] = useState("");
  const [isTransferee, setIsTransferee] = useState(false);

  const resetForm = () => {
    console.log("form resetted");
    clearTextInputs(email, firstname, midname, lastname);
    setCourseId("");
    setYearAdmitted("");
    setIsTransferee(false);
  };

  const handleError = (error) => {
    setShowModal(true);
    setResponse(error);
  };

  const handleSuccess = (response) => {
    setShowModal(true);
    setResponse(response);
    //reset form after successfull submit
    resetForm();
    setDocumentsChecklist(documentsList);
    setPdfFile(null);
    pdfFileRef.current.value = null;
    setInvalidForm(false);
  };

  const masterlistHook = useMasterlist(handleError, handleSuccess);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const isTransferee = data.get("transferee") === "on" ? true : false;
    const midname = data.get("midname") === "" ? null : data.get("midname");
    const studentForm = {
      email: data.get("email"),
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      midname: midname,
      course_id: data.get("course_id"),
      year_admitted: data.get("year_admitted"),
    };

    masterlistHook.addToMasterlist(
      studentForm,
      documentsChecklist,
      pdfFile,
      note,
      hasNoEmail,
      isTransferee
    );

    setShowModal(true);
    setResponse(
      <div className="d-flex justify-content-center align-content-center h-100">
        <Spinner animation="border" role="status" />
      </div>
    );
  };

  if (user === null) {
    return <LoadingPage />;
  }

  return (
    <div>
      <BackButton text={"Back to dasboard"} />
      <div className="mt-5"></div>
      <SectionHeader text={"Manual Entry"} block={false} />
      <form
        onSubmit={submitHandler}
        className={invalidForm ? "was-validated" : ""}
        ref={formRef}
      >
        <div className="mt-5 bg-grey">
          <SectionHeader text={"Student info"} block={true} />
          <div className="container px-4 py-3 pb-5">
            <StudentAccountForm
              hasNoEmail={hasNoEmail}
              onHasNoEmailChange={setHasNoEmail}
              email={email}
              firstname={firstname}
              midname={midname}
              lastname={lastname}
              courseId={courseId}
              yearAdmitted={yearAdmitted}
              isTransferee={isTransferee}
              changeCourse={(course_id) => setCourseId(course_id)}
              changeTransferee={(state) => {
                setIsTransferee(state);
              }}
              changeYearAdmitted={(year) => setYearAdmitted(year)}
            />
          </div>
        </div>
        <div className="mt-5 mb-5 bg-grey">
          <SectionHeader text={"Checklist"} block={true} />
          <div className="container px-4 py-3 pb-5">
            <DocumentsChecklist
              documents={documentsChecklist}
              setDocuments={setDocumentsChecklist}
            />
          </div>
        </div>
        <div className="mb-5 bg-grey">
          <SectionHeader text={"Digitized documents"} block={true} />
          <div className="mt-3 px-4 py-3">
            <input
              className="form-control file-input"
              name="pdf"
              type="file"
              onChange={(e) => {
                setPdfFile(e.target.files[0]);
              }}
              multiple
              accept="application/pdf"
              required
              ref={pdfFileRef}
            />
          </div>
        </div>
        <div className="mt-3 mb-3">
          <label htmlFor="note" className="form-label">
            <strong>Registrar note (for email):</strong>
          </label>
          <input
            className="form-control"
            name="note"
            type="text"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            disabled={hasNoEmail}
          />
        </div>
        <div className="mb-5 mt-3 d-flex">
          <SecondaryButton
            text={"Cancel"}
            onClick={() => navigate("/staff/verification-requests")}
          />
          <div className="me-3"></div>
          <input
            type="submit"
            onClick={(e) => {
              const form = formRef.current;
              if (!form.checkValidity()) {
                setInvalidForm(true);
              }
            }}
            className="btn btn-main"
            value={"Add to masterlist"}
          />
        </div>
      </form>
      <ResponseModal
        show={showModal}
        handleClose={handleClose}
        response={response}
        headerText={"Adding to masterlist"}
      />
    </div>
  );
};

export default ManualEntryPage;
