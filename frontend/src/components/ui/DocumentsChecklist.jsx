import React from "react";
import DocumentRow from "../../pages/staff/VerificationRequests/DocumentRow";

const DocumentsChecklist = ({ documents, handleVerifyDocument }) => {
  const documentRows = documents.map((document) => {
    return (
      <DocumentRow
        key={document.id}
        document={document}
        verifyDocument={handleVerifyDocument}
      />
    );
  });
  return { documentRows };
};

export default DocumentsChecklist;
