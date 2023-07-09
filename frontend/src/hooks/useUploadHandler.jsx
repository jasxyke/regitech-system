import React, { useState } from "react";
import axiosClient from "../utils/axios";
import { converToFileList } from "../utils/fileListConverter";

const useUploadHandler = () => {
  const [documents, setDocuments] = useState(null);
  const [documentInfos, setDocumentInfos] = useState(null);
  const [pendingDocuments, setPendingDocuments] = useState(null);

  const addDocument = (document, documentInfo, resetForm) => {
    if (documents === null) {
      setDocuments([document]);
    } else {
      let newDocuments = [...documents, document];
      setDocuments(newDocuments);
    }

    console.log("documents: ");
    console.log(documents);

    if (documentInfos === null) {
      setDocumentInfos([documentInfo]);
    } else {
      let newInfos = [...documentInfos, documentInfo];
      setDocumentInfos(newInfos);
    }

    console.log("document infos: ");
    console.log(documentInfos);

    if (pendingDocuments === null) {
      setPendingDocuments([{ document: document, documentInfo: documentInfo }]);
    } else {
      let newPendingDocument = [
        ...pendingDocuments,
        { document: document, documentInfo: documentInfo },
      ];
      setPendingDocuments(newPendingDocument);
    }

    console.log("pending documents: ");
    console.log(pendingDocuments);

    resetForm();
  };

  const removeDocument = (document, documentInfoId) => {
    let removedDocument = documents.filter((doc) => doc !== document);
    console.log(removedDocument);
    setDocuments(removedDocument);

    let removedDocumentInfo = documentInfos.filter(
      (doc) => doc.document_type_id !== documentInfoId
    );
    console.log(removedDocumentInfo);
    setDocumentInfos(removedDocumentInfo);

    let newPendingDocuments = pendingDocuments.filter(
      (doc) => doc.document !== document
    );
    console.log(newPendingDocuments);
    setPendingDocuments(newPendingDocuments);
  };

  const uploadDocuments = async (handleError) => {
    if (
      pendingDocuments === null ||
      documents === null ||
      documentInfos === null
    ) {
      handleError("No documents added");
      return;
    }
    try {
      let fileList = converToFileList(documents);
      const res = await axiosClient.post(
        "/upload",
        {
          documents: fileList,
          documentInfos: documentInfos,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      setDocumentInfos(null);
      setDocuments(null);
      setPendingDocuments(null);
      location.reload();
    } catch (error) {
      console.log(error);
      handleError(error.response?.data.message);
    }
  };

  return {
    documents,
    pendingDocuments,
    documentInfos,
    addDocument,
    removeDocument,
    uploadDocuments,
  };
};

export default useUploadHandler;
