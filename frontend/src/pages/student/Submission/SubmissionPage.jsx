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

const SubmissionPage = () => {
  const student = useUser();

  const [pdfSrc, setPdfSrc] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadHook = useUploadHandler();

  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    setLoading(true);
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
        doc.addImage(imageUrl, "JPEG", x, y, imgWidth, imgHeight);
        if (i + 1 < files.length) {
          doc.addPage();
        }
      }

      const pdfUrl = doc.output("bloburl");
      setPdfSrc(pdfUrl);

      uploadHook.addDocument(doc.output("blob"));
      setLoading(false);
    };

    compileImagesToPDF();
  };

  const handleError = (error) => {};

  const submitDocument = () => {
    if (pdfSrc === null) return;
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
          <strong>Submit Documents</strong>
        </h2>
      </div>
      <div className={StudentCSS.submitDocBox + " mb-3"}>
        {errorMsg !== "" && <Alert variant="primary"></Alert>}
        {loading ? (
          <div className="d-flex mb-5 justify-content-center">
            <Spinner animation="border" />
          </div>
        ) : null}
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
              text={"Add documents"}
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
          <PrimaryButton text={"Submit"} onClick={submitDocument} />
        </div>
      </div>
    </div>
  );
};

export default SubmissionPage;
