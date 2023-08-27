import React, { useRef, useState } from "react";
import GreetingsHeader from "../../../components/GreetingsHeader";
import { useUser } from "../../../context/UserContext";
import LoadingPage from "../../../components/LoadingPage";
import StudentCSS from "../StudentDashboard/StudentDashboard.module.css";
import { Alert, Button, Spinner } from "react-bootstrap";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import SecondaryButton from "../../../components/ui/SecondaryButton";

import jsPDF from "jspdf";
import useUploadHandler from "../../../hooks/useUploadHandler";
import ResponseModal from "../../../components/ResponseModal";
import { Link } from "react-router-dom";

const SubmissionPage = () => {
  const student = useUser();

  const [errorMsg, setErrorMsg] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState(null);
  const [headerText, setHeaderText] = useState("");

  const handleError = (error) => {
    setShowModal(true);
    setResponse(error);
    setHeaderText("Error");
  };

  const handleResponse = (response) => {
    setShowModal(true);
    setResponse(
      <div>
        <p>{response}</p>
        <p>
          Success! Click <Link to="/student/dashboard">here</Link> to view your
          document status
        </p>
      </div>
    );
    setHeaderText("uploading...");
  };

  const uploadHook = useUploadHandler({ handleResponse, handleError });
  const pdfSrc = uploadHook.pdfSrc;
  const setPdfSrc = uploadHook.setPdfSrc;
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const compileImagesToPDF = () => {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageUrl = window.URL.createObjectURL(file);

        const imgHeight = pageHeight - 20;
        const imgWidth = pageWidth - 20;
        const x = 10;
        const y = 10;
        doc.addImage(imageUrl, "JPEG", x, y, imgWidth, imgHeight, "", "FAST");
        if (i + 1 < files.length) {
          doc.addPage();
        }
      }

      const pdfUrl = doc.output("bloburl");
      setPdfSrc(pdfUrl);

      uploadHook.addDocument(doc.output("blob"));
    };

    compileImagesToPDF();
  };

  const submitDocument = () => {
    uploadHook.uploadDocuments();
  };

  if (student === null) {
    return <LoadingPage />;
  }
  return (
    <div className="mb-5">
      <GreetingsHeader name={student?.user?.firstname || "Name Here"} />

      <div className={StudentCSS.table_header}>
        <h2>
          <strong>Submit Requirements</strong>
        </h2>
      </div>
      <div className="container">
        <strong>
          <p className="h5">Instructions in submitting the requirements:</p>
        </strong>
        <ol>
          <li>
            <b>Prepare the following documents:</b>
            <ul>
              <li>SAR Form</li>
              <li>Form 138 Grade 10</li>
              <li>Form 138 Grade 11</li>
              <li>Form 138 Grade 12</li>
              <li>PSA Birth Certificate"</li>
              <li>Certificate of Good Moral/Completion</li>
              <li>Undertaking</li>
              <li>Medical Information Sheet</li>
              <li>Form 137 SHS</li>
            </ul>
          </li>
          <b>
            <li>Take a picture each document</li>
          </b>
          <b>
            <li>
              Upload the images using the "Select document images" button below
            </li>
          </b>
          <b>
            <li>
              You can check your compiled documents using the "View documents"
              button
            </li>
          </b>
          <b>
            <li>Then press submit</li>
          </b>
          <b>
            <li>
              After submitting here, proceed to the registrar's office with your
              documents and submit the original copies you submitted here.
            </li>
          </b>
        </ol>
      </div>
      <div className={StudentCSS.submitDocBox + " mb-3"}>
        {errorMsg !== "" && <Alert variant="primary"></Alert>}
        {pdfSrc !== null && (
          <div className="d-flex mb-5">
            <p className="me-auto h5 my-auto">
              <b>Compiled document images</b>
            </p>
            <SecondaryButton
              text={"View documents"}
              onClick={() => {
                window.open(pdfSrc, "_newtab");
              }}
            />
          </div>
        )}
        {pdfSrc === null ? (
          <div className="mb-3 mt-3 d-grid">
            <SecondaryButton
              text={"Select document images"}
              onClick={() => fileInputRef.current.click()}
            />
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleFileInputChange}
              multiple
              ref={fileInputRef}
              accept="image/png, image/jpeg"
            />
          </div>
        ) : (
          <div className="mb-3 mt-3 d-grid">
            <SecondaryButton
              text={"Remove documents"}
              onClick={() => {
                setPdfSrc(null);
                uploadHook.removeDocument();
              }}
            />
          </div>
        )}
        <div className="mt-3 mb-3 d-flex justify-content-end">
          <PrimaryButton
            text={"Submit"}
            onClick={() => {
              submitDocument();
              setShowModal(true);
              setResponse(
                <div className="d-flex justify-content-center">
                  <Spinner animation="border" />
                </div>
              );
              setHeaderText("Uploading...");
            }}
          />
        </div>
        <ResponseModal
          response={response}
          show={showModal}
          headerText={headerText}
          handleClose={() => {
            setShowModal(false);
          }}
        />
      </div>
    </div>
  );
};

export default SubmissionPage;
