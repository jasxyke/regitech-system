import StudentCSS from "./StudentDashboard.module.css";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import UploadDocumentModal from "./UploadDocumentModal";
import PendingDocumentRows from "./PendingDocumentRows";
import { documentTypes } from "../../../data/constants";
import { useState } from "react";
import ResponseModal from "../../../components/ResponseModal";

const ToBeSubmitted = ({
  pendingDocuments,
  availableDocumentTypes,
  handleAddDocument,
  handleRemoveDocument,
  handleSubmitDocument,
}) => {
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleError = (msg) => {
    setErrorMsg(msg);
    setShowResponseModal(true);
  };
  const submitDocuments = () => {
    handleSubmitDocument(handleError);
  };

  return (
    <>
      <div className="table-container text-center rounded-top rounded-bottom">
        <table className="table table-responsive-lg">
          <thead className={`align-middle ${StudentCSS.tableHead}`}>
            <tr>
              <th className={StudentCSS.col}>Document Submitted</th>
              <th className={StudentCSS.col}>Document Status</th>
              <th className={StudentCSS.col}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingDocuments !== null && (
              <PendingDocumentRows
                pendingDocuments={pendingDocuments}
                removeDocument={handleRemoveDocument}
              />
            )}
          </tbody>
        </table>
      </div>
      <div className={`mt-3 mb-3 ${StudentCSS.btnsContainer}`}>
        <UploadDocumentModal
          availableDocumentTypes={availableDocumentTypes}
          addDocument={handleAddDocument}
        />
        <PrimaryButton text={"Submit"} onClick={submitDocuments} />
      </div>
      <ResponseModal
        headerText={"No added document"}
        response={errorMsg}
        show={showResponseModal}
        handleClose={() => setShowResponseModal(false)}
      />
    </>
  );
};

export default ToBeSubmitted;
