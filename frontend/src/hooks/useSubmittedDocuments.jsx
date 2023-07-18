import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axios";

const useSubmittedDocuments = () => {
  const [submittedDocuments, setSubmittedDocuments] = useState(null);

  const verifyDocument = (document) => {
    const docIndex = submittedDocuments.findIndex(
      (doc) => doc.id === document.id
    );

    // Create a new object with the updated name property
    const verifiedDoc = {
      ...submittedDocuments[docIndex],
      document_status_id: document.document_status_id,
      document_status: document.document_status,
    };

    // Create a new array with the updated object
    const updatedDocuments = [...submittedDocuments];
    updatedDocuments[docIndex] = verifiedDoc;

    setSubmittedDocuments(updatedDocuments);
  };

  // const submitVerification = async (
  //   requestId,
  //   verifiedDocuments,
  //   registrarNote
  // ) => {
  //   try {
  //     console.log("request id: ", requestId);
  //     console.log("documents: ");
  //     console.log(verifiedDocuments);
  //     console.log("note: ", registrarNote);
  //     const res = await axiosClient.post(`/verify-documents/${requestId}`, {
  //       note: registrarNote,
  //       documents: verifiedDocuments,
  //     });
  //     console.log(res);
  //     handleResponse(res.data);
  //   } catch (error) {
  //     console.log(error);
  //     handleError(error);
  //   }
  // };

  const getSubmittedDocuments = async (student_id) => {
    try {
      console.log("stud id");
      console.log(student_id);
      let res = await axiosClient.get("/submitted-documents/" + student_id);
      console.log("submitted docs: ");
      console.log(typeof res.data);
      console.log(res.data);
      console.log(res);
      console.log(res.data === "");
      setSubmittedDocuments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    submittedDocuments,
    setSubmittedDocuments,
    getSubmittedDocuments,
    verifyDocument,
    //submitVerification,
  };
};

export default useSubmittedDocuments;
